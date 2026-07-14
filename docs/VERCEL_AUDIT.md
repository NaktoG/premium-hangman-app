# Auditoría de despliegue en Vercel

## Framework

React 18 con Vite 6 y TypeScript estricto.

## Versión de Node.js

El proyecto declara Node.js `>=18.20.0` y npm `>=10.0.0` en `package.json`.

## Gestor de paquetes

npm con `package-lock.json` versionado.

## Comando de instalación

```bash
npm ci
```

## Comando de build

```bash
npm run build
```

El script ejecuta `tsc -b && vite build`.

## Carpeta de salida

```txt
dist
```

## Variables de entorno

No se detectaron variables de entorno requeridas para build o runtime.

## Servicios externos

No requiere servicios externos para funcionar en producción. El ranking y el nickname se guardan en `localStorage` del navegador.

## APIs

No consume APIs externas ni rutas server-side.

## Base de datos

No utiliza base de datos.

## Adaptadores actuales

No utiliza adaptadores de despliegue específicos. Vite genera archivos estáticos en `dist`.

## Riesgos

- El ranking es local al navegador y no se sincroniza entre dispositivos.
- Si en el futuro se agregan rutas client-side, puede requerirse un rewrite a `index.html`.
- Cualquier variable con prefijo `VITE_` será pública en el bundle del navegador.

## Decisión: compatible / compatible con cambios / no compatible

Compatible directamente con Vercel como sitio estático.
