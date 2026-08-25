# Flow 01 - Market Data Ingestion

## Trigger
WebSocket message received from Deribit exchange.

## Preconditions
- phixum-node is running
- Deribit WebSocket connection is established
- SPSC channel buffer is allocated

## Steps
1. WebSocket receiver thread reads message frame
2. Message is deserialized into `MarketData` struct
3. `MarketData` is pushed to SPSC channel (non-blocking)
4. Quote engine consumer reads from channel
5. ArcSwap snapshot is updated with new market data (lock-free)

## Postconditions
- Latest market data is available via `ArcSwap::load_full()` to all readers
- No mutex acquisition occurred on the hot path

## Error Handling
- If SPSC channel is full, message is dropped (logged at WARN level)
- If deserialization fails, raw message is logged at ERROR level and dropped
