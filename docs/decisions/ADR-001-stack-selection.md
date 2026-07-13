# ADR-001: Stack Selection

## Status

Accepted

## Context

El proyecto es una aplicación frontend estática, sin backend ni base de datos. Debe ser moderna, coste cero y desplegable en Netlify.

## Decision

Usar React, Vite, TypeScript, Tailwind CSS, Vitest, Testing Library, Playwright, GitHub Actions y Netlify.

## Consequences

- Build rápido y simple.
- Despliegue estático gratuito.
- Refactor seguro con TypeScript.
- Testing moderno y mantenible.
- Menor complejidad que mantener Angular para esta escala.
