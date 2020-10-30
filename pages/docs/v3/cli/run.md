---
title: CLI Command - cap run
description: Capacitor CLI - cap run
---

# Capacitor CLI - cap run

This command first runs [`copy`](/docs/cli/copy), then it builds and deploys the native app to a target device of your choice.

```bash
npx cap run <platform>
```

<strong>Inputs:</strong>

- `platform` (required): `android`, `ios`

<strong>Options:</strong>

- `--list`: Print a list of target devices available to the given platform
- `--target <id>`: Run on a specific target device