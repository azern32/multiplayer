const express = require('express');
const app = express();
const serv = require('http').Server(app);
const io = require('socket.io')(serv,{})


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/client/index.html')
})
app.use('/client', express.static(__dirname+ '/client'))
serv.listen(3000)
console.log(`Server started on ${Date()}`)


io.sockets.on('connection',(a)=>{
    console.log('socket connect')

    a.on('pesan', (data)=>{
        console.log('pesannya :' + data.msg)
    })

    a.emit('serverMsg',{
        msg:'sama, cuma tes juga'
    })
})