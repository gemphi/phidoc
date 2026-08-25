# RealityKit

A Swift framework for building augmented reality experiences with 3D content.

## Overview

RealityKit provides high-performance 3D simulation and rendering for AR applications. It integrates with ARKit for world tracking and scene understanding.

## Key Components

- **Entity** - The fundamental unit of 3D content
- **AnchorEntity** - Anchors content to real-world positions
- **ModelEntity** - Renderable 3D model with materials
- **BodyTrackedEntity** - Rigged character with motion capture
- **Scene** - Container for entities and anchors

## Phi Integration

The `realitykit` crate provides Rust bindings for RealityKit entities, anchors, and the scene graph. The `reality-foundation` crate covers the supporting types (transforms, bounding boxes, materials).
