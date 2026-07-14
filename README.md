<div align="center">

# Premium Hangman App

### Juego competitivo del ahorcado con ranking local

**Repositorio:** [github.com/NaktoG/premium-hangman-app](https://github.com/NaktoG/premium-hangman-app)

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=111)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222?logo=github&logoColor=white)](https://naktog.github.io/premium-hangman-app/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://premium-hangman-app.vercel.app)

</div>

---

## Descripción

Juego del ahorcado premium, responsive y bilingüe construido con React, Vite y TypeScript. El proyecto reemplaza una implementación Angular inicial por una arquitectura frontend moderna, testeable y preparada para despliegue estático en Netlify.

## Objetivo

Ofrecer una experiencia de juego cuidada en español e inglés, con pantalla inicial, registro simple por nickname, ranking local de mejores tiempos, accesibilidad, tests automatizados y documentación operativa.

## Características

| Funcionalidad | Descripción |
|---|---|
| **Pantalla de inicio** | Landing interna con CTA para iniciar partida |
| **Registro simple** | Nickname local, sin backend ni coste operativo |
| **Ranking local** | Mejores tiempos guardados en `localStorage` |
| **Temporizador competitivo** | Medición de tiempo para ordenar ganadores |
| **Ayuda automática** | Revela letras con intervalo configurable |
| **Internacionalización** | Español e inglés con `i18next` |
| **Diseño premium** | Dark UI, glassmorphism controlado y layout responsive |
| **Accesibilidad** | Labels, foco visible, semántica y navegación por teclado |
| **Testing** | Tests unitarios/UI con Vitest y E2E con Playwright |

## Demo

**Vercel:** [premium-hangman-app.vercel.app](https://premium-hangman-app.vercel.app)

**GitHub Pages:** [naktog.github.io/premium-hangman-app](https://naktog.github.io/premium-hangman-app/)

**Netlify (inactivo):** [premium-hangman-app.netlify.app](https://premium-hangman-app.netlify.app)

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| UI | React 18 |
| Build | Vite 6 |
| Lenguaje | TypeScript estricto |
| Estilos | Tailwind CSS |
| i18n | i18next / react-i18next |
| Tests unitarios/UI | Vitest + Testing Library |
| Tests E2E | Playwright |
| Deploy | Vercel |

## Persistencia local

El ranking y nickname son client-side. Los datos se guardan en `localStorage` del navegador.

Limitaciones conocidas:

- El ranking existe solo en el navegador/dispositivo actual.
- Si se limpian los datos del sitio, el ranking se pierde.
- No hay sincronización entre usuarios reales ni dispositivos.
- Para ranking global real se necesitaría backend y base de datos.

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
  features/hangman/       # Dominio, UI, hook, ranking, storage e i18n
  shared/                 # Componentes reutilizables
  test/                   # Configuración de testing
docs/                     # Arquitectura, ADRs, diagramas y guías
e2e/                      # Tests end-to-end
```

## Deploy En Vercel

Producción:

```txt
https://premium-hangman-app.vercel.app
```

Configuración:

```txt
Framework Preset: Vite
Root Directory: ./
Build Command: npm run build
Output Directory: dist
Install Command: npm ci
```

## Deploy En GitHub Pages

```txt
https://naktog.github.io/premium-hangman-app/
```

## Deploy En Netlify

```txt
https://premium-hangman-app.netlify.app
```

Nota: la cuenta Netlify actual bloqueó nuevos deploys por créditos excedidos.

## Documentación

- [Arquitectura](docs/ARCHITECTURE.md)
- [Testing](docs/TESTING.md)
- [Deploy](docs/DEPLOYMENT.md)
- [Contribución](docs/CONTRIBUTING.md)
- [Flujo del juego](docs/diagrams/game-flow.md)
- [Arquitectura visual](docs/diagrams/architecture.md)
