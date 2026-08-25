# phixum-ml

Machine learning integration for regime classification and spread optimization.

## Components

- **RegimeClassifier** - Classifies market regime (trending, mean-reverting, volatile)
- **SpreadOptimiser** - Adjusts bid-ask spread based on regime and inventory
- **ModelRegistry** - Manages multiple ML models with versioning
- **ShadowMode** - Runs models in parallel without affecting live quotes

## Architecture

ML inference runs on the Rayon thread pool to avoid blocking the Tokio runtime. Models are loaded from serialized weights and updated via the ModelRegistry without restart.
