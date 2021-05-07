const { app, BrowserWindow, Menu, globalShortcut} = require('electron');


const url = require("url");
const path = require("path");
const { triggerAsyncId } = require('async_hooks');

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    title: "OS Armoury",
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,

    frame: false,
    icon: './src/images/icon.png',
    webPreferences: {
      nodeIntegration: true,
      devTools: true,
      enableRemoteModule: true
    }
  })
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `./dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  mainWindow.on('closed', function () {
    mainWindow = null
  })
  mainWindow.setMenu(null)




}





console.log(app);
app.on('ready', createWindow)


app.on('ready', function () {
  globalShortcut.register('E', () => {
    mainWindow.webContents.openDevTools();
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})


app.setUserTasks([])
