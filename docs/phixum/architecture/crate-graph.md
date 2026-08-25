# Crate Graph

Detailed dependency relationships between phixum crates.

## Dependency Table

| Crate | Depends On | Description |
|-------|-----------|-------------|
| `phixum-model` | (none) | Core domain types, no internal deps |
| `phixum-pricing` | model | Black-Scholes engine, IV solver |
| `phixum-network` | model | InfallibleMutex, ExchangeAdapter trait |
| `phixum-risk` | model, pricing | Risk gateway, position limits |
| `phixum-execution` | model, network | Order manager, matching engine |
| `phixum-deribit` | model, network | Deribit HTTP + WebSocket adapter |
| `phixum-strategy` | model, pricing, risk, ml | Quote engine, chain manager |
| `phixum-persistence` | model | PostgreSQL persistence, HotStuff commit |
| `phixum-grpc` | model, strategy | tonic gRPC server |
| `phixum-ml` | model | RegimeClassifier, SpreadOptimiser |
| `phixum-research` | model, pricing, strategy | Backtest CLI, model training |
| `phixum-node` | all | Binary entry point, supervisor tree |

## Build Order

```
phixum-model → phixum-pricing → phixum-network → phixum-risk
            → phixum-ml → phixum-execution → phixum-deribit
            → phixum-strategy → phixum-persistence → phixum-grpc
            → phixum-research → phixum-node
```
