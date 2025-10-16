import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const back = vscode.commands.registerCommand('tabHistory.navigateBack', () => {
    vscode.commands.executeCommand('workbench.action.navigateBack');
  });
  const forward = vscode.commands.registerCommand('tabHistory.navigateForward', () => {
    vscode.commands.executeCommand('workbench.action.navigateForward');
  });
  context.subscriptions.push(back, forward);
}

export function deactivate() {}
