#!/usr/bin/env node

const { execSync, spawnSync } = require('child_process');
const os = require('os');
const fs = require('fs');
const path = require('path');

function runCheck(command, args = []) {
  try {
    execSync(command, args, { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

function runInstall(command, args = []) {
  console.log(`Running: ${command} ${args.join(' ')}`);
  // Force non-interactive mode: auto-accept all prompts
  const env = Object.assign({}, process.env, { npm_config_yes: 'true', CI: 'true' });
  const result = spawnSync(command, args, { stdio: 'inherit', shell: true, env });
  if (result.status !== 0) {
    console.error(`Failed: ${command} exited with status ${result.status}`);
    process.exit(1);
  }
}

function isGlobalPackageInstalled(packageName) {
  const platform = os.platform();
  if (platform === 'win32') {
    // Windows: check global npm prefix
    try {
      const prefix = execSync('npm config get prefix', { encoding: 'utf8' }).trim();
      const checkPath = path.join(prefix, 'node_modules', packageName);
      return fs.existsSync(checkPath);
    } catch {
      return false;
    }
  } else {
    // macOS/Linux: check if require resolves globally
    return runCheck('npm', ['list', '-g', packageName]);
  }
}

function checkAndInstallGhostCLI() {
  console.log('\n[1/2] Checking @ghost.build/cli...');
  if (isGlobalPackageInstalled('@ghost.build/cli')) {
    console.log('✓ @ghost.build/cli is already installed globally');
  } else {
    console.log('Installing @ghost.build/cli globally (non-interactive)...');
    runInstall('npm', ['install', '-g', '@ghost.build/cli', '--yes']);
    console.log('✓ @ghost.build/cli installed');
  }
}

function checkAndInstallPiMcpAdapter() {
  console.log('\n[2/2] Checking pi-mcp-adapter...');
  // Check if pi-mcp-adapter is installed via pi
  try {
    const result = execSync('pi list 2>/dev/null || pi ls 2>/dev/null', { encoding: 'utf8', shell: true });
    if (result.includes('pi-mcp-adapter')) {
      console.log('✓ pi-mcp-adapter is already installed');
      addPiToMcpConfig();
      return;
    }
  } catch {
    // pi list might not exist, try pi install check differently
  }

  // Alternative: check if pi-mcp-adapter npm package exists globally
  if (isGlobalPackageInstalled('pi-mcp-adapter')) {
    console.log('✓ pi-mcp-adapter is already installed');
    addPiToMcpConfig();
    return;
  }

  console.log('Installing pi-mcp-adapter via Pi (non-interactive)...');
  runInstall('pi', ['install', 'npm:pi-mcp-adapter']);
  console.log('✓ pi-mcp-adapter installed');
  addPiToMcpConfig();
}

function addPiToMcpConfig() {
  console.log('\n[3/3] Adding Ghost MCP server to pi-mcp-adapter config...');
  
  // Determine Pi agent dir
  const piAgentDir = process.env.PI_CODING_AGENT_DIR || path.join(os.homedir(), '.pi', 'agent');
  const mcpConfigPath = path.join(piAgentDir, 'mcp.json');
  
  // Ghost MCP server config
  const ghostServerEntry = {
    'command': 'ghost',
    'args': ['mcp']
  };
  
  try {
    // Read existing config or create new
    let config = { mcpServers: {} };
    if (fs.existsSync(mcpConfigPath)) {
      config = JSON.parse(fs.readFileSync(mcpConfigPath, 'utf8'));
      if (!config.mcpServers) config.mcpServers = {};
    }
    
    // Add ghost server if not already present
    if (!config.mcpServers['ghost']) {
      config.mcpServers['ghost'] = ghostServerEntry;
      fs.mkdirSync(piAgentDir, { recursive: true });
      fs.writeFileSync(mcpConfigPath, JSON.stringify(config, null, 2));
      console.log('✓ Added Ghost MCP server to ' + mcpConfigPath);
    } else {
      console.log('✓ Ghost MCP server already configured');
    }
  } catch (err) {
    console.error('Failed to update MCP config:', err.message);
  }
}

function main() {
  const platform = os.platform();
  console.log(`\n========================================`);
  console.log(`pi-ghost installer`);
  console.log(`Platform: ${platform} (${os.arch()})`);
  console.log(`========================================\n`);

  if (platform !== 'win32' && platform !== 'darwin' && platform !== 'linux') {
    console.error(`Unsupported platform: ${platform}`);
    process.exit(1);
  }

  checkAndInstallGhostCLI();
  checkAndInstallPiMcpAdapter();

  console.log('\n========================================');
  console.log('✓ pi-ghost setup complete!');
  console.log('========================================\n');
  console.log('Pi is now integrated with Ghost MCP ecosystem via pi-mcp-adapter.');
}

main();
