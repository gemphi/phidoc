# CI/CD Pipeline

phixum uses GitHub Actions for continuous integration and deployment.

## Workflows

### CI (`ci.yml`)
Triggered on pull requests:
- `cargo fmt --check`
- `cargo clippy -- -D warnings`
- `cargo test --workspace`
- `cargo tarpaulin --workspace` (coverage)

### Staging Deploy (`deploy-staging.yml`)
Triggered on push to `main`:
- Build Docker image
- Push to ECR
- `helm upgrade --install` to staging EKS

### Production Deploy (`deploy-production.yml`)
Manual dispatch with approval gate:
- Promote image from staging ECR
- `helm upgrade --install` to production EKS
- Verify rollout status

## Self-Hosted Runners

Runners are provisioned on dedicated Linux VMs with:
- Docker Engine
- kubectl, helm
- Rust toolchain
- AWS CLI

KUBECONFIG is stored as GitHub Actions encrypted secrets.
