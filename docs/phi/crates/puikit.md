# PUIKit

Cross-platform UI kit for Rust applications - abstracts platform-specific UI frameworks (AppKit on macOS, UIKit on iOS) behind a unified API.

## Overview

PUIKit provides:

- **View hierarchy** - Composable view trees with automatic layout
- **Event handling** - Unified touch/mouse/keyboard event abstraction
- **Layout system** - Constraint-based and frame-based layout
- **Rendering** - Metal-backed GPU rendering pipeline

## Architecture

```
PUIKit
  ├── View (base view type)
  ├── ScrollView (scrollable container)
  ├── SplitView (resizable panes)
  ├── Button, TextField, Label (controls)
  └── LayoutEngine (constraint solver)
```

## Platform Backends

| Platform | Backend |
|----------|---------|
| macOS | AppKit (NSView) |
| iOS | UIKit (UIView) |
| visionOS | RealityKit (Entity) |
