# phixum-node

Binary entry point and async runtime supervisor tree root.

## Responsibilities

- Initializes the Tokio runtime
- Starts all subsystems (market data, strategy, execution, risk, persistence)
- Manages graceful shutdown
- Exposes gRPC API for external clients

## Startup Sequence

1. Load configuration from TOML
2. Initialize persistence layer (PostgreSQL connection pool)
3. Start market data receiver (WebSocket to Deribit)
4. Initialize pricing engine and option chain
5. Start risk gateway with current positions
6. Launch quote engine
7. Start gRPC server
8. Enter main event loop

## Shutdown

On `SIGTERM` or `Ctrl+C`:
1. Stop accepting new orders
2. Cancel all open quotes
3. Flush pending state to PostgreSQL
4. Close WebSocket connections
5. Exit cleanly
