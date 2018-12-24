const express = require("express")
const SocketIO = require("socket.io")
const app = express()

const PORT = 3000

let namespaces = require("./data/namespaces")

app.use(express.static(__dirname + "/public"))

// socket.io listens for express Server
const expressServer = app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`)
})
// socketio servers binds to the httpServer (expressServer)
const io = new SocketIO(expressServer)
// "connect || connection" is a socket.io keyword
io.on("connect", socket => {
  socket.emit("msgFromServer", {data: "data from server"})
  socket.on("msgToServer", dataFromClient => {
    console.log(`data: ${dataFromClient}`);
  })
})

// admin namespace
const adminNamespace = io.of("/admin")
adminNamespace.on("connect", socket => {
  // console.log("connected to admin namespace")
  adminNamespace.emit("msgFromAdmin", "data from admin namespace")
  // socket.emit("msgFromServer", {data: "data from server"})
  // socket.on("msgToServer", dataFromClient => {
  //   console.log(`data: ${dataFromClient}`);
  })

console.log(namespaces);
