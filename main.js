const { app, BrowserWindow } = require('electron');
const path = require('path');

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

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());