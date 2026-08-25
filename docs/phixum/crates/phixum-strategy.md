# phixum-strategy

Quote engine and option chain manager - the brain of the market-making system.

## Components

- **QuoteEngine** - Generates bid/ask quotes based on pricing, risk, and ML signals
- **OptionChainManager** - Maintains the full option chain with real-time Greeks
- **Block-STM Greeks** - Parallel Greeks computation inspired by Diem's Block-STM

## Quote Lifecycle

1. Market data arrives via SPSC channel
2. ArcSwap snapshot is updated (lock-free)
3. QuoteEngine reads snapshot, computes fair value
4. Risk gateway validates position limits
5. ML module adjusts spread based on regime
6. Quote is published to order manager
