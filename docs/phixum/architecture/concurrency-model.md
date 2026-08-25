# Concurrency Model

phixum uses a lock-free architecture to keep the Tokio async event loop completely unblocked.

## Core Principles

### 1. Lock-Free Reads via ArcSwap

All hot-path reads use `ArcSwap` snapshots - no mutex acquisition on the quote path:

```rust
let snapshot = self.market_data.load_full();  // Lock-free read
let quotes = snapshot.quotes();
```

### 2. Infallible Locking

`InfallibleMutex` and `InfallibleRwLock` crash-fast on poison - no silent corruption:

```rust
let guard = self.state.lock_infallible();  // Panics if poisoned
```

### 3. Rayon Parallel Reductions

CPU-intensive work (Greeks computation, risk aggregation) is dispatched to Rayon, keeping the Tokio runtime free:

```rust
let total_delta: f64 = positions
    .par_iter()
    .map(|p| p.delta())
    .sum();
```

### 4. SPSC Channels

Market data flows through Single-Producer Single-Consumer channels with pre-allocated buffers - zero allocation on the hot path.

## Thread Topology

```
Tokio Runtime (async I/O)
  ├── Market Data Receiver (WS → SPSC)
  ├── Quote Engine (SPSC → ArcSwap snapshot)
  ├── Order Manager (async gRPC)
  └── Risk Gateway (periodic Rayon batch)

Rayon Pool (CPU-bound)
  ├── Greeks Computation
  ├── Risk Aggregation
  └── ML Inference
```
