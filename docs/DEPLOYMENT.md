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

## Vercel

Production URL:

```txt
https://premium-hangman-app.vercel.app
```

Configuración en Vercel:

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Root Directory | `./` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm ci` |
| Node.js | 18.x |

## Variables De Entorno

No requiere variables de entorno para funcionar.

## Rollback

Vercel permite volver a un deploy anterior desde su dashboard o ejecutar un redeploy de una versión previa.

Netlify permite volver a un deploy anterior desde su dashboard (cuenta con créditos excedidos actualmente).

## Health Check Manual

Abrir la URL pública y validar:

- La página carga sin errores.
- El cambio de idioma funciona.
- Se puede ingresar una letra.
- El layout se adapta a móvil y escritorio.
