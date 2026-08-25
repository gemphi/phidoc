# PhiFly

The PhiFly resonance engine - a quantum semantic resonance model that learns through structural phase alignment without backpropagation or transformers.

## Architecture

```
PhiFlyEngine
  ├── PhiTon (quantum state: frequency + phase)
  ├── Gemgum (temporal decay + foveal weighting)
  ├── ResonanceEngine (CPU resonance computation)
  └── StateHistory (temporal state buffer)
```

## PhiTon

The fundamental quantum type:

```rust
pub struct PhiTon {
    pub frequency: f32,
    pub phase: f32,
}
```

- **Frequency** - Represents the "energy" or "amplitude" of a concept
- **Phase** - Represents the "position" or "perspective" of a concept

## Resonance Calculation

Resonance between two PhiTon states is computed as:

```rust
let diff = (state.phase - signal.phase) as f64;
diff.cos() * (state.frequency * signal.frequency) as f64
```

- Phase-aligned states (diff ≈ 0) → maximum positive resonance (constructive)
- Anti-phase states (diff ≈ π) → maximum negative resonance (destructive)
- Orthogonal states (diff ≈ π/2) → zero resonance

## Gemgum Layer

The Gemgum layer provides:

- **Temporal Decay Adhesion** - Recent states influence current resonance more than distant ones
- **Foveal Weighting** - Central elements in a sequence receive higher weight

## Examples

```bash
# Elon Musk first-principles brain demo
cargo run --example elon_brain --features nlp -p phi-oml

# Basic resonance demo
cargo run --example basic_resonance -p phi-oml
```
