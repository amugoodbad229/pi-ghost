# pi-ghost

<div align="center">

**Pi agent integration for [Ghost](https://ghost.build) — the first database built for agents.**

[![Ghost](https://img.shields.io/badge/Ghost-TimescaleDB-00b894?style=flat&logo=postgresql)](https://ghost.build)
[![Pi](https://img.shields.io/badge/Pi-Agent-ff6b6b?style=flat&logo=claude)](https://pi.dev)
[![npm](https://img.shields.io/npm/v/pi-ghost?style=flat)](https://www.npmjs.com/package/pi-ghost)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

</div>

---

## What is Ghost?

Ghost is a database designed for AI agents — built on [TimescaleDB](https://github.com/timescale/timescaledb), offering unlimited Postgres databases you can create, fork, and discard freely.

Ghost's MCP ecosystem includes 8 agents: **Claude Code**, **Codex**, **Google Antigravity**, and now **Pi** via this package.

## Prerequisites

- [Pi CLI](https://pi.dev) installed and in your `PATH`
- [Node.js](https://nodejs.org) and npm

> **⚠️ Critical:** When setting up the Ghost repository, you must use `npm install` to configure dependencies correctly.

---

## Installation

### Option 1: Via Pi (npm package)

```bash
pi install npm:pi-ghost
```

### Option 2: Via Pi (git repository)

```bash
pi install git:https://github.com/amugoodbad229/pi-ghost.git
```

---

## What the Installer Does

| Step | Action | Auto-yes |
|------|--------|----------|
| 1 | Check `@ghost.build/cli` globally | ✅ |
| 2 | Install if missing: `npm install -g @ghost.build/cli` | ✅ |
| 3 | Check `pi-mcp-adapter` | ✅ |
| 4 | Install if missing: `pi install npm:pi-mcp-adapter` | ✅ |

Works on **Windows**, **macOS**, and **Linux** — fully non-interactive.

---

## After Installation

Run `/reload` in Pi to load the Ghost integration.

```bash
ghost mcp install    # Ghost's MCP setup
# Pi is now included alongside Claude Code, Codex, etc.
```

---

## Resources

- [Ghost Documentation](https://ghost.build/docs)
- [Ghost GitHub](https://github.com/timescale/ghost)
- [TimescaleDB](https://github.com/timescale/timescaledb)
- [Pi Agent](https://pi.dev)

---

## License

[Apache-2.0](LICENSE)
