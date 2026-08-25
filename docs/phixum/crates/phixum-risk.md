# phixum-risk

Risk gateway enforcing position limits, margin checks, and collateral management.

## Key Concepts

- **CollateralResource** - Non-copyable type (Move-VM pattern) preventing double-spend
- **PositionLimits** - Max position per underlying, per expiry, per strike
- **MarginChecks** - Pre-trade margin validation against available collateral
- **RiskGateway** - Central gate that all orders must pass through before execution

## Design

The risk gateway runs on a periodic Rayon batch, aggregating portfolio risk in f64 precision while the hot path operates in f32.
