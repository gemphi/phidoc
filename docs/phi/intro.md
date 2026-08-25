# Phi

Phi is a Rust-native workspace providing Apple SDK bindings, machine learning models, and UI frameworks for building cross-platform applications.

## Overview

The Phi workspace contains:

- **phi-oml** - Machine learning crate with PhiFly resonance engine, Phigum NLP resolver, and various ML primitives
- **phifly** - Quantum semantic resonance model using phase alignment (no backpropagation, no transformers)
- **phigum** - Linguistic entity resolver that learns "relations of worlds" like a child
- **appkit** - Rust bindings for Apple's AppKit framework
- **puikit** - Cross-platform UI kit for Rust applications
- **kitpro** - Professional UI component library
- **phidoc** - Apple SDK documentation mirror (ARKit, UIKit, Foundation, RealityKit, Swift)

## Quick Start

```bash
# Build all crates
cargo build --release

# Run tests
cargo test --workspace

# Run the Phigum example
cargo run --example elon_brain --features nlp -p phi-oml
```

## Crate Graph

```
phi-oml
  ├── phifly (PhiFly resonance engine)
  │     ├── phiton (quantum types)
  │     ├── gemgum (temporal fusion)
  │     └── resonance (CPU resonance engine)
  ├── nlp
  │     ├── phigum (linguistic entity resolver)
  │     ├── text_classifier
  │     ├── word_tagger
  │     └── word_embedding
  └── phical (quantum types: PhiTon, Q64)
```

## Design Principles

1. **No Backpropagation** - The PhiFly model uses structural phase alignment, not gradient descent
2. **Child-like Learning** - Phigum learns through world relations, not massive statistical encoding
3. **Minimal Data** - Proven on concentrated datasets (e.g., Elon Musk first-principles demo)
4. **Rust-Native** - All crates are pure Rust with no external LLM dependencies
