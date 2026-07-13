# Testing

El proyecto usa Vitest, Testing Library y Playwright.

## Unit Tests

Cubren lógica pura de dominio:

- Normalización de palabras.
- Letras correctas e incorrectas.
- Inputs vacíos.
- Victoria y derrota.
- Ayuda automática sin recursión.
- Sanitización de nickname.
- Ordenamiento de ranking por menor tiempo.

```bash
npm run test
```

## UI Tests

Validan comportamiento de usuario:

- Render inicial.
- Pantalla de inicio.
- Registro simple por nickname.
- Cambio de idioma.
- Escritura de letras.

## E2E

Validan flujos reales en navegador:

```bash
npm run e2e
```

## Criterio De Aceptación

Antes de mergear a `main`, deben pasar:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```
