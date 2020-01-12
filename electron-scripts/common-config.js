const appInfo = require('./app-info');
module.exports = {
    "dir": "./",
    "icon": "resources/icon.ico",
    "name": "IBM Garage Angular",
    "ignore": ["./builds", "./.git", "./config", "./platforms", ",/electron-scripts",  "./platforms-desktop"],
    "out": "./platforms-desktop",
    "overwrite": true,
    "prune": true,
    "version": "1.3.2",
    ...appInfo,
}