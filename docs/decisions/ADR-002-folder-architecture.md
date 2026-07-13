# ADR-002: Folder Architecture

## Status

Accepted

## Context

La aplicación necesita separar lógica, UI, configuración y documentación para evitar acoplamiento.

## Decision

Usar arquitectura feature-based con una feature principal `hangman`.

## Consequences

- La carpeta `src/features/hangman` comunica el dominio.
- La lógica pura se testea sin React.
- Los componentes permanecen enfocados en presentación.
- El crecimiento futuro se puede organizar por nuevas features.
