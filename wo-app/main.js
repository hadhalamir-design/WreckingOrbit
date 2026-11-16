
const { app, BrowserWindow, dialog } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');

function createWindow() {
  const w = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    backgroundColor: '#070b2a',
    icon: path.join(__dirname, 'icon.ico'),
  });

  w.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  if (app.isPackaged) {
    autoUpdater.checkForUpdatesAndNotify();
  }
});

autoUpdater.on('update-downloaded', async () => {
  const result = await dialog.showMessageBox({
    type: 'info',
    title: 'Wrecking Orbit Update',
    message: 'A new update is ready. Restart to install it?',
    buttons: ['Restart now', 'Later'],
    defaultId: 0,
  });

  if (result.response === 0) {
    autoUpdater.quitAndInstall();
  }
});

app.on('window-all-closed', () => app.quit());
