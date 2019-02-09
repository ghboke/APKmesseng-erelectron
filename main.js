const { app, BrowserWindow ,ipcMain} = require('electron')
global.sharedObject = {prop1: process.argv}
console.log(sharedObject)

function createWindow () {
    // 创建浏览器窗口
    win = new BrowserWindow({ width: 800, height: 600 })
    // 然后加载应用的 index.html。
    win.loadFile('index.html')
    win.webContents.openDevTools();
}
app.on('ready', createWindow)
app.on('window-all-closed',() => {
    app.quit();
});
