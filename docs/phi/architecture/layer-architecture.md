# Layer Architecture

The Phi workspace follows a layered architecture with clear separation between platform bindings, UI frameworks, and application logic.

## Layers

```
┌──────────────────────────────────────────┐
│         Application Layer                │
│   (PhiFly apps, Botanist, Showcases)     │
├──────────────────────────────────────────┤
│         UI Framework Layer               │
│   PUIKit → KitPro → Panel System         │
├──────────────────────────────────────────┤
│         Platform Binding Layer            │
│   AppKit, UIKit, RealityKit, ARKit       │
├──────────────────────────────────────────┤
│         Core / ML Layer                  │
│   phi-oml, phifly, phigum, phical        │
├──────────────────────────────────────────┤
│         System Layer                     │
│   Metal, Foundation, Core ML             │
└──────────────────────────────────────────┘
```

## Dependency Rules

1. **Application Layer** depends on UI Framework Layer only
2. **UI Framework Layer** depends on Platform Binding Layer
3. **Platform Binding Layer** depends on Core/ML Layer
4. **Core/ML Layer** is self-contained (no upward dependencies)
5. **System Layer** wraps Apple SDK C/Objective-C APIs

## Crate Ownership

Each layer is owned by a specific team boundary. Crates within the same layer may depend on each other, but cross-layer dependencies must flow downward only.
