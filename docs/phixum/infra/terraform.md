# Terraform Infrastructure

phixum uses Terraform to provision AWS infrastructure for production deployment.

## Resources

| Resource | Type | Purpose |
|----------|------|---------|
| EKS Cluster | `aws_eks_cluster` | Kubernetes control plane |
| EKS Node Group | `aws_eks_node_group` | Worker nodes |
| RDS PostgreSQL | `aws_db_instance` | Managed database |
| ECR Repository | `aws_ecr_repository` | Container registry |
| IAM Roles | `aws_iam_role` | Service permissions |
| VPC / Subnets | `aws_vpc`, `aws_subnet` | Network topology |

## Environments

- **staging** - `environments/staging.tfvars`
- **production** - `environments/production.tfvars`

## Deployment

```bash
cd infra/terraform
terraform init
terraform apply -var-file=environments/staging.tfvars
```
