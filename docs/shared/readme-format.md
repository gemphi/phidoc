# README Format

Standardized README template for all crates in the gemphi workspace.

## Template

```markdown
---
id: crate-name
title: Crate Name
custom_edit_url: https://github.com/gemphi/workspace/edit/main/crates/crate-name/README.md
---

# Crate Name

Brief one-line description.

## Overview

2-3 paragraph description of what the crate does and why it exists.

## Features

- Feature 1
- Feature 2

## Quick Start

\`\`\`bash
cargo build -p crate-name
cargo test -p crate-name
\`\`\`

## Architecture

Brief description of internal structure.

## Dependencies

List of key external dependencies.

## License

MIT
```

## Rules

- Frontmatter is mandatory
- `id` must match the crate name (kebab-case)
- `title` should be human-readable
- `custom_edit_url` should point to the correct GitHub edit URL
- Keep READMEs concise - link to detailed docs in PhiDoc for deep dives
