# phixum-model

Core domain types with no internal dependencies - the shared vocabulary for all phixum crates.

## Key Types

- `OptionType` - Call/Put enum
- `OptionContract` - Strike, expiry, underlying, option type
- `Position` - Quantity, average price, contract
- `Order` - Side, price, quantity, status
- `Trade` - Executed order details
- `MarketData` - Bid/ask, last price, volume

## Design Rules

- No dependencies on other phixum crates
- All types are `Clone + Send + Sync`
- No business logic - pure data definitions
- Serde serialization for all types
