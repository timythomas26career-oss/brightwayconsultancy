# Bright Way Consultancy

Official website for Bright Way Consultancy — a study abroad and migration
consultancy guiding students through university admissions, IELTS/PTE/OET
coaching, visa documentation and verified accommodation abroad.

## Stack

- [TanStack Start](https://tanstack.com/start) (file-based routing + SSR)
- React 19
- TypeScript
- Tailwind CSS v4
- Nitro (deploy)

## Development

Requires Node.js and npm.

```sh
npm i
npm run dev
```

## Build

```sh
npm run build     # production build
npm run build:dev # development-mode build
npm run preview   # preview the production build
```

## Lint & format

```sh
npm run lint
npm run format
```

## Structure

- `src/routes/` — file-based routes (see `src/routes/README.md`)
- `src/components/site/` — page-level building blocks
- `src/components/ui/` — shadcn/ui-style components
- `src/lib/` — utilities and server error handling
- `src/assets/` — images
