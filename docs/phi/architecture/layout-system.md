# Layout System

The unified layout system for PUIKit and KitPro - supporting both constraint-based and frame-based layout.

## Overview

The layout system handles:

- **View hierarchy** - Parent-child relationships with automatic invalidation
- **Constraint solver** - Auto Layout-style constraints for macOS/iOS
- **Frame-based layout** - Manual frame assignment for custom views
- **Split panes** - Resizable dividers with persistent state

## Startup Sequence

A critical fix was applied to the winit startup sequence: when the window initially reports a smaller size before maximizing, the layout rebuild now dynamically reads the current `root_view` bounds when the pending action executes, rather than using stale captured dimensions.

```rust
app.pending_actions.push(Box::new(move |root_view| {
    if let Some(rebuild) = rebuild_fn {
        let frame = root_view.frame();
        rebuild(root_view, frame.width(), frame.height());
        root_view.layout_subviews();
    }
}));
```

This ensures the startup layout always aligns with the maximized window dimensions.

## Panel System

The panel system uses the layout engine for:

- **Dock areas** - Left, right, bottom, center panel regions
- **Collapsible panels** - Expand/collapse with animated transitions
- **Drag reordering** - Panels can be dragged between dock areas
- **Persistent state** - Panel layout saved and restored across sessions
