# ADR-003: State Management

## Status

Accepted

## Context

El estado es local al juego y no requiere sincronización con backend ni estado global compartido.

## Decision

Usar estado local de React encapsulado en `useHangmanGame`.

## Consequences

- No se añade Redux, Zustand ni otra librería global.
- Menos dependencias y menor superficie de bugs.
- El hook funciona como fachada testeable.
- El estado derivado no se duplica.
