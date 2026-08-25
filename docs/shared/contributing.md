# Contributing

Guidelines for contributing to the gemphi workspace.

## Development Setup

```bash
# Clone the workspace
git clone https://github.com/gemphi/gemphi.git
cd gemphi

# Build Phi crates
cd phi && cargo build --release

# Build Phixum crates
cd ../phixum && cargo build --release

# Run docs site
cd ../phidoc && npm install && npm start
```

## Pull Request Process

1. Create a feature branch from `main`
2. Ensure `cargo fmt --check` passes
3. Ensure `cargo clippy -- -D warnings` passes
4. Ensure `cargo test --workspace` passes
5. Write/update tests for changed code
6. Request review from at least one maintainer
7. Squash merge after approval

## Code Style

- Follow Rust idioms - no unnecessary `clone()`, prefer borrows
- Keep files under 200 lines - split into modules
- Document public APIs with `///` doc comments
- Use meaningful variable names - no single letters except in tight loops
