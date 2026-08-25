# Phigum

The Phigum Linguistic Entity & World Relations Resolver - a self-contained, phase-resonant natural language model that learns through world relations instead of massive statistics and backpropagation.

## Design Philosophy

- **No LLMs** - Does not use or depend on any large language model
- **No Backpropagation** - Learning is through phase alignment, not gradient descent
- **Child-like Learning** - Learns "relations of worlds" through associative concepts
- **Minimal Data** - Proven on concentrated datasets (e.g., a single persona's first principles)

## Concept Graph

Each concept has:

```rust
pub struct PhigumConcept {
    pub name: String,
    pub description: String,
    pub phase: f32,      // Position in semantic space
    pub amplitude: f32,  // Strength/confidence
}
```

## Relation Types

| Relation | Description |
|----------|-------------|
| `Supports` | Constructive interference - concepts reinforce each other |
| `Contradicts` | Destructive phase cancellation - concepts oppose |
| `IsA` | Sub-class or instance relationship |
| `Causes` | Causal relationship |
| `PartOf` | Compositional relationship |

## Usage

```rust
use phi_oml::nlp::PhigumResolver;

let mut brain = PhigumResolver::new();

// Register concepts with their semantic phase
brain.add_concept("Aerospace-Physics", PI / 2.0, "Rocket mechanics and thermal limits");
brain.add_concept("Mass-Production", 0.0, "Production line optimization");

// Learn relations between concepts
brain.learn_fact("Aerospace-Physics supports Mass-Production")?;
brain.learn_fact("Mass-Production causes Cost-Reduction")?;

// Query the graph
let answer = brain.resolve("How does aerospace physics relate to cost reduction?")?;
```

## Teaching Strategy

1. **Register base domains** - Add core concepts with explicit descriptions and reference phases
2. **Learn facts** - Feed simple subject-verb-object facts to build the relation graph
3. **Resolve queries** - The resolver traces the strongest resonance path through the graph
4. **Iterate** - Add more concepts and facts to expand the knowledge graph incrementally
