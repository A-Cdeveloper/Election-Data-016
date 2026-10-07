/**
 * One-off: refresh lat/lng in data/places.json via Nominatim.
 * Usage: node scripts/geocode-places.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const placesPath = join(__dirname, "../data/places.json");

const places = JSON.parse(readFileSync(placesPath, "utf8"));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function geocode(place) {
  const queries = [
    `${place.address}, ${place.object}, Opština Vlasotince, Srbija`,
    `${place.address}, Vlasotince, Srbija`,
    `${place.object}, ${place.address}, Vlasotince, Srbija`,
  ];

  for (const q of queries) {
    const url =
      "https://nominatim.openstreetmap.org/search?" +
      new URLSearchParams({
        q,
        format: "json",
        limit: "1",
        countrycodes: "rs",
      });

    const res = await fetch(url, {
      headers: { "User-Agent": "ElectionData-Geocode/1.0 (local dev)" },
    });
    const data = await res.json();
    if (data?.[0]) {
      return {
        latitude: Number.parseFloat(data[0].lat),
        longitude: Number.parseFloat(data[0].lon),
        displayName: data[0].display_name,
        query: q,
      };
    }
    await sleep(1100);
  }
  return null;
}

const updated = [];
for (const place of places) {
  const result = await geocode(place);
  await sleep(1100);

  if (!result) {
    console.warn(`BM ${place.number}: no result — kept original`);
    updated.push(place);
    continue;
  }

  console.log(
    `BM ${place.number}: ${result.latitude}, ${result.longitude} (${result.query})`
  );
  updated.push({
    ...place,
    latitude: result.latitude,
    longitude: result.longitude,
  });
}

writeFileSync(placesPath, JSON.stringify(updated, null, 2) + "\n", "utf8");
console.log("Wrote", placesPath);
