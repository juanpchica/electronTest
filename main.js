const {app,BrowserWindow} = require('electron');

function createWindow (){
    const win = new BrowserWindow({
        width:800,
        height:600
    })

    win.loadFile('index.html')
}

//Wait until app module ready event is fired
app.whenReady().then(()=>{
    createWindow();
})