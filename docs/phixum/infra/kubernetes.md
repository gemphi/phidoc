# Kubernetes Deployment

phixum deploys to Kubernetes via Helm charts with the following topology.

## Deployments

| Deployment | Replicas | Purpose |
|-----------|----------|---------|
| phixum-node | 3 | Trading engine (horizontal scaling) |
| phixum-worker | 2 | Background workers (persistence, ML) |
| postgres-proxy | 1 | Connection pooler (PgBouncer) |

## Services

- **phixum-grpc** - gRPC API (port 50051)
- **phixum-metrics** - Prometheus metrics (port 9090)

## Helm

```bash
helm upgrade --install phixum ./helm/phixum \
  --set image.tag=latest \
  --namespace phixum
```

## Autoscaling

Horizontal Pod Autoscaler targets:
- CPU: 70% utilization
- Memory: 80% utilization
- Custom: quotes/sec metric
