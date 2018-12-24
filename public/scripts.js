const socket = io("http://localhost:3000") // the / namespace
const socket2 = io("http://localhost:3000/admin") // the / admin namespace

// socket.on("connect", () => console.log(`SOCKET ID: ${socket.id}`))
// socket2.on("connect", () => console.log(`SOCKET2 ID: ${socket2.id}`))

socket.on("msgFromServer", msg => {
  console.log(`server data: ${msg}`)
  socket.emit("msgToServer", {data: "data from client"})
})

socket2.on("msgFromAdmin", msg => console.log(`admin namespace server data: ${msg}`))

document.querySelector("#message-form").addEventListener("submit", e => {
  e.preventDefault()
  const newMessage = document.querySelector("#user-message").value
  // send user-message value to server
  socket.emit("usrMsgToSvr", {text: newMessage})
})

socket.on("msgBroadcast", msg => {
  console.log(msg.text)
  document.querySelector("#messages").innerHTML += `<li>${msg.text}</li>`
})
