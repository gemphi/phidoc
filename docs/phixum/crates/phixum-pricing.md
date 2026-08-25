# phixum-pricing

Black-Scholes pricing engine and implied volatility solver.

## Features

- **Black-Scholes** - European option pricing with f32 hot path
- **Greeks** - Delta, Gamma, Vega, Theta, Rho
- **IV Solver** - Halley's method with convergence fallback
- **f32/f64 Split** - f32 for per-quote Greeks, f64 for portfolio aggregation

## Usage

```rust
use phixum_pricing::BlackScholes;

let bs = BlackScholes::new(spot, strike, vol, r, t);
let price = bs.price(OptionType::Call);
let delta = bs.delta(OptionType::Call);
let iv = bs.implied_vol(market_price, OptionType::Call);
```
