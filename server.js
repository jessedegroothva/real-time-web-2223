/*
https://socket.io/get-started/chat
*/

const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");
const port = process.env.PORT || 4242;

// Start het longpolling proces, geef io mee
// setInterval(callApi, 2500, io)

const historySize = 50;
let history = [];

// Serveer client-side bestanden
app.use(express.static(path.resolve("public")));

io.use((socket, next) => {
  const nickname = socket.handshake.auth.user;
  if (!nickname) {
    return next(new Error("invalid nickname"));
  }
  socket.nickname = nickname;
  next();
});

// SOCKET
// CONNECTION
io.on("connection", async (socket) => {
  console.log("a user connected", socket.nickname);

  io.emit("userConnected", socket.nickname);
});

function callApi(io) {
  io.emit("whatever", "somebody set up us the bomb!");
}

http.listen(port, () => {
  console.log("listening on http://localhost:" + port);
});
