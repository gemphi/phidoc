# UIKit

Construct and manage a graphical, event-driven user interface for your iOS, iPadOS, or tvOS app.

## Overview

UIKit provides the window and view architecture for implementing your UI, the event-handling infrastructure for delivering Multi-Touch and other types of input to your app, and the main run loop for managing interactions between the user, the system, and your app.

## Key Components

- **UIView** - Base view class for rendering and layout
- **UIViewController** - Manages a view hierarchy and coordinate events
- **UIWindow** - Top-level container for the UI
- **UIEvent / UITouch** - Touch and motion event handling
- **UITableView / UICollectionView** - Data-driven scrollable views

## Integration with Phi

UIKit is bound in the `phi/crates/uikit/` crate and abstracted by PUIKit for cross-platform use.
