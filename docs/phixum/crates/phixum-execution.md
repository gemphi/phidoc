# phixum-execution

Order management and matching engine for executing trades.

## Components

- **OrderManager** - Tracks active orders, handles acknowledgments and fills
- **InMemoryMatchingEngine** - Price-time priority matching for internal testing

## Order States

```
Pending → Acknowledged → PartiallyFilled → Filled
                     ↘ → Rejected
                     ↘ → Cancelled
```
