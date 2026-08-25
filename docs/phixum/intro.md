# phixum

A production-grade, Rust-native options trading engine for crypto derivatives.

## Overview

phixum is a systematic options market-making platform demonstrating mastery of lock-free architecture, Black-Scholes pricing, multi-exchange adapters, and ML integration - built as a single, cohesive Rust workspace.

## Features

- **Real-time Black-Scholes Pricing** - f32 hot-path for Greeks, f64 exact for risk aggregation
- **Implied Volatility Solver** - Halley iteration with full convergence fallback
- **Multi-Exchange Adapter** - Deribit adapter with trait-based extensibility
- **Lock-Free Architecture** - ArcSwap snapshots, SPSC channels, zero-lock reads on hot path
- **Risk Gateway** - Position limits, margin checks, non-copyable CollateralResource
- **ML Integration** - RegimeClassifier, SpreadOptimiser, ModelRegistry, ShadowMode
- **Full DevOps** - Terraform (EKS/RDS/ECR), Helm charts, GitHub Actions CI/CD

## Quick Start

```bash
git clone https://github.com/phixum/phixum.git
cd phixum
cargo build --release
cargo test --workspace
cargo run --release --bin phixum-node
```

## Design Principles

1. **Lock-Free Reads** - All hot-path reads use ArcSwap snapshots
2. **Type-Safe Resources** - CollateralResource cannot be copied (Move-VM pattern)
3. **f32 Hot Path** - Greeks compute in f32 (~4x faster), f64 for risk aggregation
4. **Zero-Allocation Events** - SPSC channels, pre-allocated buffers
5. **Team Ownership Boundaries** - Each crate = one team, clear interface contracts

## Performance Targets

| Metric | Target |
|--------|--------|
| Quote latency | < 1ms (P99) |
| Greeks computation | < 10ms for 500 positions |
| Memory per connection | < 10 MB |
| Throughput | 10k quotes/sec |
