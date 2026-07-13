# Deployment

La aplicación se despliega como sitio estático.

## Netlify

Production URL:

```txt
https://premium-hangman-app.netlify.app
```

Current status: Netlify rejected the latest production deploy because the account exceeded available credits. The site remains configured, but new deploys require resolving the Netlify account limit.

## GitHub Pages

Active updated preview:

```txt
https://naktog.github.io/premium-hangman-app/
```

Manual static deployment:

```bash
npm run build -- --base=/premium-hangman-app/
```

The generated `dist` output is published to the `gh-pages` branch.

Configuración:

```txt
Build command: npm run build
Publish directory: dist
```

## Variables De Entorno

No requiere variables de entorno para funcionar.

## Rollback

Netlify permite volver a un deploy anterior desde su dashboard.

## Health Check Manual

Abrir la URL pública y validar:

- La página carga sin errores.
- El cambio de idioma funciona.
- Se puede ingresar una letra.
- El layout se adapta a móvil y escritorio.
