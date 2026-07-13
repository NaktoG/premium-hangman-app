# Architecture

Premium Hangman App usa arquitectura feature-based con separación explícita entre dominio, estado de UI y presentación.

## Principios

- La estructura debe revelar el dominio.
- La lógica de negocio no vive en componentes React.
- El estado tiene una única fuente de verdad.
- Los textos están centralizados en i18n.
- Los componentes compartidos son accesibles por defecto.

## Capas

```txt
app -> features -> shared
```

`app` compone la experiencia general.

`features/hangman/domain` contiene lógica pura y testeable.

`features/hangman/hooks` expone la fachada `useHangmanGame`.

`features/hangman/components` contiene UI específica de la feature.

`shared/components` contiene primitivas reutilizables.

## Reglas De Dependencia

- `domain` no importa React.
- `components` pueden usar hooks y tipos de la feature.
- `shared` no depende de `features`.
- Los textos visibles se obtienen mediante i18n.
- La configuración vive en `config`, no dentro de JSX.

## Patrones Aplicados

- Facade: `useHangmanGame` simplifica el consumo de reglas y estado.
- Strategy: selección de palabra y normalización son funciones intercambiables.
- Factory: `createInitialGameState` centraliza el estado inicial.
- State Pattern ligero: el juego se gobierna por `playing`, `won` y `lost`.
- Single Source of Truth: el estado del juego vive en un único objeto.
