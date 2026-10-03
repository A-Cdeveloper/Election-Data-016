# ElectionData

A web app for exploring **polling places in Vlasotince**. An interactive **Leaflet** map shows every polling station; clicking a pin opens details for that location.

## About

ElectionData brings polling-place information together in one place: where each station is, how many voters are registered, and other key details useful before and during elections.

**Main user flow:**

1. Open the Vlasotince map with a pin for each polling place
2. Click a pin → view that station’s details (location, registered voter count, notes, and more)
3. (Planned) Admin sign-in → add and update data through the app

## Features

### Current (in development)

- Next.js project setup and dev tooling (ESLint, Prettier, pre-commit hook)

### Planned

| Area            | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| Map             | Leaflet map centered on Vlasotince, markers per polling place |
| Station details | Panel or page with full data for each location                |
| Admin           | Authentication and ability to add or edit information (later) |

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Leaflet (planned for the map)

## Local development

**Prerequisite:** Node.js (LTS recommended).

```bash
npm install
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Other commands

```bash
npm run build    # production build
npm run start    # run production server
npm run lint     # ESLint
npm run format   # Prettier (format entire project)
```

On commit, Prettier and ESLint run on staged files via `husky` and `lint-staged`.

## Status

Early stage: the concept is defined (Vlasotince polling-place map, details, and admin). Features will be implemented incrementally.

## License

Private project (`private`).
