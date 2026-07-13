# Premium Hangman App

Juego del ahorcado premium, responsive y bilingüe construido con React, Vite y TypeScript. El proyecto reemplaza una implementación Angular inicial por una arquitectura frontend moderna, testeable y preparada para despliegue estático en Netlify.

## Objetivo

Ofrecer una experiencia de juego cuidada en español e inglés, con arquitectura profesional, accesibilidad, tests automatizados y documentación operativa.

## Stack

- React 18
- Vite
- TypeScript estricto
- Tailwind CSS
- i18next / react-i18next
- Vitest + Testing Library
- Playwright
- GitHub Actions
- Netlify

## Requisitos

- Node.js 18.20 o superior
- npm 10 o superior

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Comandos

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run preview
npm run e2e
```

## Estructura

```txt
src/
  app/                    # Shell de aplicación y providers
  features/hangman/       # Feature principal con dominio, UI, hook e i18n
  shared/                 # Componentes reutilizables
  test/                   # Configuración de testing
docs/                     # Arquitectura, ADRs, diagramas y guías
e2e/                      # Tests end-to-end
```

## Deploy En Netlify

Producción:

```txt
https://premium-hangman-app.netlify.app
```

Configuración recomendada:

```txt
Build command: npm run build
Publish directory: dist
```

## Documentación

- [Arquitectura](docs/ARCHITECTURE.md)
- [Testing](docs/TESTING.md)
- [Deploy](docs/DEPLOYMENT.md)
- [Contribución](docs/CONTRIBUTING.md)
- [Flujo del juego](docs/diagrams/game-flow.md)
- [Arquitectura visual](docs/diagrams/architecture.md)
