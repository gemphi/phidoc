# ARKit

Construct and manage immersive augmented reality experiences in your app.

## Overview

ARKit provides world tracking, plane detection, image recognition, body tracking, hand tracking, scene reconstruction, and more. The Phi workspace mirrors Apple's ARKit documentation structure for Rust bindings.

## Key APIs

- **ARSession** - Manages the AR experience lifecycle
- **ARWorldTrackingConfiguration** - 6-DOF world tracking with feature points
- **ARPlaneAnchor** - Detected surfaces for placing virtual content
- **ARMeshAnchor** - Scene reconstruction mesh geometry
- **ARHandAnchor** - Hand skeleton tracking for visionOS

## C API (visionOS)

ARKit exposes a C API for visionOS with provider-based data delivery:

```c
ar_world_tracking_provider_t provider =
    ar_world_tracking_provider_create(configuration);
ar_world_tracking_provider_set_update_handler_f(
    provider, my_update_handler, NULL);
```

## Phi Integration

The `arkit` crate in `phi/crates/phidoc/arkit/` contains detailed documentation for every ARKit symbol, organized by framework version and platform.
