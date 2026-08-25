# Flow 02 - Quote Generation

## Trigger
Market data snapshot updated (Flow 01 postcondition).

## Preconditions
- Fresh market data in ArcSwap snapshot
- Option chain is initialized
- Risk gateway has current positions

## Steps
1. Quote engine reads latest ArcSwap snapshot (lock-free)
2. Black-Scholes pricing computes fair value for each option (f32 hot path)
3. Greeks are computed for portfolio risk assessment
4. ML module classifies regime and adjusts spread
5. Risk gateway validates position limits
6. Quote is published to order manager via async channel

## Postconditions
- Quotes are sent to order manager for execution
- Risk metrics are updated for monitoring

## Error Handling
- If risk gateway rejects, quote is suppressed and logged
- If ML model is unavailable, default spread is used
