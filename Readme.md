# Figma Plugin Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Starter kit designed for developing Figma plugins using modern technologies like [Vite](https://vitejs.dev/), [React](https://react.dev/), and [Nanostores](https://evilmartians.com/opensource/nano-stores).

## Features

- [Vite](https://vitejs.dev/): For fast, unbundled development, optimized with esbuild.
- [React](https://react.dev/): To build UI with modern React features.
- [Nanostores](https://evilmartians.com/opensource/nano-stores): For state management in React components.
- [Tailwind CSS](https://tailwindcss.com/): For styling components with utility-first CSS.
- [TypeScript](https://www.typescriptlang.org/): Strongly typed programming language that builds on JavaScript.
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/): For code quality and formatting.
- [Vitest](https://vitest.dev/): For unit testing of your components and API.
- [Continuous Integration](https://docs.github.com/en/actions): Configured GitHub Actions for automated testing.

## Getting Started

To use this boilerplate, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/mikhin/figma-plugin-boilerplate.git
```

### Install Dependencies

```bash
pnpm install
```

## Start Development

- For UI development: `pnpm run dev:ui`
- For API development: `pnpm run dev:api`

## Build for Production

- Build UI: `pnpm run build:ui`
- Build API: `pnpm run build:api`

## Testing

- Run lint checks: `pnpm test:lint`
- Run type checks: `pnpm test:types`
- Execute unit tests: `pnpm test:unit:ui` and `pnpm test:unit:api`

## License

This project is licensed under the MIT License.

> [!CAUTION]
> Note: Always remember to replace placeholders like <REPLACE_WITH_YOUR_NAME> in the `manifest.json` with your actual details.
