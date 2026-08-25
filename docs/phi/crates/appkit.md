# AppKit

Rust bindings for Apple's AppKit framework - the primary UI framework for macOS applications.

## Overview

AppKit provides the window and view architecture for macOS apps, event handling, and the main run loop. The `appkit` crate exposes these APIs to Rust with idiomatic wrappers.

## Key Components

- **NSApplication** - Main application object and event loop
- **NSWindow** - Window management and rendering
- **NSView** - View hierarchy and layout
- **NSResponder** - Event response chain

## Integration

The AppKit crate integrates with:

- **PUIKit** - Cross-platform UI kit that abstracts AppKit on macOS
- **KitPro** - Professional component library built on top of PUIKit
- **PhiFly** - Rendering pipeline integration for GPU-accelerated UI
