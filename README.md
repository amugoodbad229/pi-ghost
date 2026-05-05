# pi-ghost

Adds Pi agent to Ghost MCP ecosystem via pi-mcp-adapter.

## Install

```bash
pi install npm:pi-ghost
```

Or:

```bash
pi install git:https://github.com/amugoodbad229/pi-ghost.git
```

## What it does

1. Checks `@ghost.build/cli` — installs globally if missing
2. Checks `pi-mcp-adapter` — installs via Pi if missing
3. Adds Pi to pi-mcp-adapter's MCP config
4. Works on Windows, macOS, Linux (non-interactive)

## After installation

Run `/reload` in Pi to load the integration.

## License

Apache-2.0
