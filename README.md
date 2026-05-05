# pi-ghost

Pi agent integration for the Ghost MCP ecosystem. Ghost's MCP setup includes 8 agents (Claude Code, Codex, Google Antigravity, etc.) — this package adds native **Pi** support.

## Prerequisites
- Node.js and npm installed (for global package management)

> **⚠️ Critical:** When downloading the Ghost repository, you must use the `npm install` method to set up dependencies correctly.

## Installation

Choose one of the following methods to install pi-ghost:

### Method 1: Install via Pi (npm package)
```bash
pi install npm:pi-ghost
```

### Method 2: Install via Pi (git repository)
```bash
pi install git:https://github.com/amugoodbad229/pi-ghost.git
```

## What The Installer Does

When you run either installation command, pi-ghost will **automatically**:

1. **Check** if `@ghost.build/cli` is already installed globally via npm
   - ✅ If present: skip
   - ⬇️ If missing: runs `npm install -g @ghost.build/cli`

2. **Check** if `pi-mcp-adapter` is already installed (via Pi or npm)
   - ✅ If present: skip
   - ⬇️ If missing: runs `pi install npm:pi-mcp-adapter`

3. **Works cross-platform** — Windows, macOS, Linux — no extra configuration required

## Post-Installation

After installation, Pi will be available alongside other Ghost MCP agents. Refer to Ghost's MCP documentation for workflow integration steps.

## License
Apache-2.0 license
