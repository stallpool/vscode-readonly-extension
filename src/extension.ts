import * as vscode from 'vscode';

let readOnly = true;
let status: vscode.StatusBarItem;

function ensureState() {
   if (!status) return;
   status.text = readOnly?'o ReadOnly':'x ReadOnly';
   status.show();
}

function wrapCmd(context: vscode.ExtensionContext, commandId: string, run: (...args: any[]) => void) {
   context.subscriptions.push(vscode.commands.registerCommand(commandId, run));
}

export function activate(context: vscode.ExtensionContext) {
   const switchReadOnlyCmd = 'switch.readonly';

   wrapCmd(context, switchReadOnlyCmd, () => {
      readOnly = !readOnly;
      ensureState();
   });
   wrapCmd(context, 'type', (args) => {
      if (!readOnly) {
         vscode.commands.executeCommand(
            'default:type', { text: args.text }
         );
      }
   });

   status = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
   status.command = switchReadOnlyCmd;
   context.subscriptions.push(status);

   readOnly = !!vscode.workspace.getConfiguration().get('editor.readOnly');
   ensureState();
}

export function deactivate(context: vscode.ExtensionContext) {
}
