# Despliegue en Vercel

## Proyecto

`premium-hangman-app`

## Estado

- [x] Preview desplegada
- [x] Producción desplegada
- [x] Variables configuradas
- [ ] Dominio configurado
- [x] Pruebas completadas

## Configuración

| Campo | Valor |
|---|---|
| Framework | Vite |
| Root Directory | `./` |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node.js | `>=18.20.0` |
| Gestor de paquetes | npm |

## URL de Producción

```txt
https://premium-hangman-app.vercel.app
```

## Variables de entorno

No se requieren variables de entorno para el despliegue actual.

## Servicios externos

No requiere backend, base de datos ni almacenamiento externo. La persistencia es local en el navegador mediante `localStorage`.

## Pruebas realizadas

Comandos ejecutados localmente:

```bash
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
```

Resultado: instalación, lint, typecheck, tests unitarios/UI y build completados correctamente. `npm ci` emitió un warning de engine para una dependencia transitiva que requiere Node.js más reciente que el runtime local (`v18.20.8`), sin bloquear la instalación ni el build.

## Limitaciones

- El ranking se guarda solo en el dispositivo actual.
- No hay sincronización entre usuarios ni dispositivos.
- No se configura dominio propio en esta etapa.

## Rollback

Revertir la Pull Request de migración o volver al despliegue estático anterior publicado en GitHub Pages/Netlify.

Para rollback desde CLI:

```bash
vercel rollback
```

## Última revisión

2026-07-14
