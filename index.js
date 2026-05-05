#!/usr/bin/env node

const { execSync } = require('child_process');
const os = require('os');

function checkAndInstallGhostCLI() {
  try {
    execSync('ghost --version', { stdio: 'ignore' });
    console.log('✓ @ghost.build/cli already installed');
  } catch {
    console.log('Installing @ghost.build/cli globally...');
    execSync('npm install -g @ghost.build/cli', { stdio: 'inherit' });
  }
}

function checkAndInstallPiMcpAdapter() {
  try {
    execSync('pi list | grep pi-mcp-adapter', { stdio: 'ignore' });
    console.log('✓ pi-mcp-adapter already installed');
  } catch {
    console.log('Installing pi-mcp-adapter...');
    execSync('pi install npm:pi-mcp-adapter', { stdio: 'inherit' });
  }
}

function main() {
  console.log(`Platform: ${os.platform()} (${os.arch()})`);
  checkAndInstallGhostCLI();
  checkAndInstallPiMcpAdapter();
  console.log('✓ pi-ghost setup complete!');
}

main();
