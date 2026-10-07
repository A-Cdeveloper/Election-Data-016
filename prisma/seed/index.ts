import "dotenv/config";

import { prisma } from "@/lib/prisma";

import { seedIncidentTypes } from "./incident-types";
import { seedPlaces } from "./places";

async function main() {
  const incidentTypes = await seedIncidentTypes();
  const places = await seedPlaces();

  console.log(
    `Seed: ${incidentTypes} incident type(s), ${places} place(s) inserted (duplicates skipped).`
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
