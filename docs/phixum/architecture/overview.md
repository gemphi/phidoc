# Architecture Overview

phixum follows a single DAG compilation tree rooted at `phixum-model` and a single async runtime supervisor tree rooted at `phixum-node`.

## Crate Dependency Graph

```
                         ┌─────────────────┐
                         │  phixum-node    │  (Binary entry point)
                         └────────┬────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
        ▼                         ▼                         ▼
┌───────────────┐      ┌──────────────────┐     ┌──────────────────┐
│phixum-strategy│      │phixum-execution  │     │phixum-deribit    │
│               │      │                  │     │                  │
│ QuoteEngine   │      │ OrderManager     │     │ ExchangeAdapter  │
│ ChainManager  │      │ MatchingEngine   │     │ WS/HTTP Client   │
│ Block-STM     │      └────────┬─────────┘     └────────┬─────────┘
└───────┬───────┘               │                        │
        │                       │                        │
   ┌────┴────┐                  │                 ┌──────┴──────┐
   │         │                  │                 │             │
   ▼         ▼                  ▼                 ▼             ▼
┌──────┐ ┌──────┐      ┌─────────────┐  ┌──────────────┐ ┌────────────┐
│model │ │risk  │      │   model     │  │    model     │ │  network   │
└──────┘ └──────┘      └─────────────┘  └──────────────┘ └────────────┘
   │         │               │                 │              │
   └─────────┴───────────────┴─────────────────┴──────────────
                             │
                      ┌──────┴──────┐
                      │ phixum-model │  (Shared vocabulary)
                      │             │
                      │ No internal │
                      │ dependencies│
                      └─────────────┘
```

## Key Design Decisions

- **Single Tree Rule** - All crates form a single DAG, no circular dependencies
- **Concurrency/Lock-free** - Hot path uses ArcSwap, infallible mutexes, Rayon parallelism
- **200-Line Limit** - Implementation files kept under 200 lines for auditability
- **Diem Standards** - READMEs follow Diem frontmatter format
