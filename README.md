# Pi-ghost

Pi agent integration for Ghost — the first database built for agents.

## What is Ghost?

Ghost is a database designed for AI agents, built on TimescaleDB (PostgreSQL). It offers unlimited databases you can create, fork, and discard freely.

Ghost's MCP ecosystem includes 8 agents: Claude Code, Codex, Google Antigravity, and now Pi via this package.

## Prerequisites

- Pi CLI installed and in your PATH (https://pi.dev)
- Node.js and npm

**Critical:** When setting up the Ghost repository, you must use `npm install` to configure dependencies correctly.

## Installation

**Via Pi (npm package):**
```bash
pi install npm:pi-ghost
```

**Via Pi (git repository):**
```bash
pi install git:https://github.com/amugoodbad229/pi-ghost.git
```

## What the installer does

1. Checks if `@ghost.build/cli` is installed globally — installs with `npm install -g @ghost.build/cli` if missing
2. Checks if `pi-mcp-adapter` is installed — installs via `pi install npm:pi-mcp-adapter` if missing
3. All prompts auto-accepted (non-interactive)
4. Works on Windows, macOS, and Linux

## After installation

Run `/reload` in Pi to load the Ghost integration.

```bash
ghost mcp install
# Pi is now included alongside Claude Code, Codex, and other agents
```

## Resources

- Ghost Documentation: https://ghost.build/docs
- Ghost GitHub: https://github.com/timescale/ghost
- TimescaleDB: https://github.com/timescale/timescaledb
- Pi Agent: https://pi.dev

## License

Apache-2.0
