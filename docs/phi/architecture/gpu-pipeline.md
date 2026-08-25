# GPU Pipeline

The rendering pipeline for Phi applications - Metal-backed GPU rendering with optimization for 60 FPS.

## Pipeline Stages

1. **Vertex Transform** - Model → View → Projection
2. **Fragment Shading** - Material + lighting computation
3. **Post-Processing** - Tone mapping, bloom, color grading
4. **Composite** - UI overlay + 3D scene composition

## Performance Optimizations

- **f32 hot path** - Geometry and lighting computed in f32 for throughput
- **Batched draws** - Minimize draw calls by batching by material
- **Depth pre-pass** - Z-only pass to reduce overdraw in fragment shading
- **GPU memory pools** - Pre-allocated buffers to avoid runtime allocation

## Performance Targets

| Metric | Target |
|--------|--------|
| Frame time | < 16.6ms (60 FPS) |
| Draw calls | < 100 per frame |
| GPU memory | < 512 MB |
| Texture uploads | Zero per frame (pre-loaded) |
