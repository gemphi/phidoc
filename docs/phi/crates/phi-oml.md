# phi-oml

The Phi Open Machine Learning crate - a self-contained ML library with quantum resonance models, NLP, and traditional ML primitives.

## Features

- **PhiFly Engine** - Quantum semantic resonance using PhiTon types (frequency + phase)
- **Phigum Resolver** - Linguistic entity resolver learning world relations without LLMs
- **NLP Modules** - Text classifier, word tagger, word embedding, gazetteer, GloVe trainer
- **Phical Integration** - Quantum types (PhiTon, Q64) from the `phical` crate

## PhiFly Resonance Model

The PhiFly engine computes resonance between quantum states using phase difference:

```rust
pub fn calculate_resonance(state: &PhiTon, signal: &PhiTon) -> f64 {
    let diff = (state.phase - signal.phase) as f64;
    diff.cos() * (state.frequency * signal.frequency) as f64
}
```

- **Constructive interference** - States with aligned phases amplify (learning)
- **Destructive interference** - States with anti-phase cancel (contradiction)
- **No gradients** - Learning happens through phase alignment, not backpropagation

## Phigum NLP Resolver

The Phigum resolver builds a graph of concepts and relations:

```rust
let mut brain = PhigumResolver::new();
brain.add_concept("Rocket-Physics", PI / 2.0, "First-principles rocket mechanics");
brain.add_concept("Mass-Production", 0.0, "High-rate production optimization");
brain.learn_fact("Rocket-Physics supports Mass-Production")?;
let answer = brain.resolve("How does rocket physics relate to production?")?;
```

## Cargo Features

| Feature | Description |
|---------|-------------|
| `nlp` | NLP modules (Phigum, text classifier, word tagger, etc.) |
| `training` | Model training utilities |
| `vision` | Computer vision modules |
| `gpu` | GPU acceleration |
| `quantum` | Quantum computing primitives |
| `compute` | Parallel compute backends |
