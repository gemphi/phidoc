# Diem Standards

The gemphi workspace follows Diem-inspired standards for crate organization, README formatting, and code quality.

## README Frontmatter

Every crate README must include YAML frontmatter:

```markdown
---
id: crate-name
title: Crate Name
custom_edit_url: https://github.com/gemphi/workspace/edit/main/crates/crate-name/README.md
---

# Crate Name

Description...
```

## Crate Conventions

1. **Single Tree Rule** - All crates form a single DAG compilation tree
2. **200-Line Limit** - Implementation files kept under 200 lines
3. **Lock-Free Hot Path** - ArcSwap snapshots, infallible mutexes, Rayon parallelism
4. **Consistent READMEs** - Every crate has a formatted README with frontmatter

## Code Quality

- `cargo fmt --check` - No formatting deviations
- `cargo clippy -- -D warnings` - No lint warnings
- `cargo test --workspace` - All tests pass
- Code reviews required for all merges to `main`
