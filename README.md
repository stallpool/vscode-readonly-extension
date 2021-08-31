# vscode-readonly-extension

This is a sample extension to enable editor read-only mode

- it is not complete read-only; it is read-only only when typing
- it does not work for copy/paste and many other commands that change contents
- define configuration item 'editor.readOnly' for enabling/disabling read-only mode
- click on 'read only' button on status bar to enable/disable mode

![Show read-only mode](https://raw.githubusercontent.com/stallpool/vscode-readonly-extension/master/demo.gif)

ref:

- https://github.com/microsoft/vscode-extension-samples/tree/main/vim-sample
- https://github.com/microsoft/vscode-extension-samples/tree/main/statusbar-sample

```
build:
npm install
./node_modules/.bin/vsce package
```
