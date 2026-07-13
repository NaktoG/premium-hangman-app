# Deployment

La aplicación se despliega como sitio estático.

## Netlify

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
