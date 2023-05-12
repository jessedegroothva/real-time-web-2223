const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");
const port = process.env.PORT || 4242;
const fetch = require("node-fetch");
const fs = require("fs");

let currentPainting = null;
let currentPaintingTitle = "";
let connectedUsers = [];

async function fetchAndBroadcastPainting() {
  const API_URL =
    "https://www.rijksmuseum.nl/api/en/collection?key=9ZKSEiYs&involvedMaker=Johannes%20Vermeer";

  const response = await fetch(API_URL);
  const data = await response.json();
  currentPainting =
    data.artObjects[Math.floor(Math.random() * data.artObjects.length)];
  currentPaintingTitle = currentPainting.title;
  console.log(currentPaintingTitle);

  // Broadcast the painting to all connected clients
  io.emit("painting", currentPainting);
}

// Fetch the painting data immediately when the server starts
fetchAndBroadcastPainting();

// Fetch the painting data again every 5 minutes
setInterval(fetchAndBroadcastPainting, 5 * 60 * 1000);

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
  connectedUsers.push(nickname);
  socket.broadcast.emit("userConnected", nickname);
  next();
});

io.on("connection", async (socket) => {
  console.log("a user connected", socket.nickname);

  socket.emit("history", history);

  // In the message handler in io.on("connection"):
  socket.on("message", (message) => {
    message.user = socket.nickname;
    history.push(message);
    if (history.length > historySize) {
      history.shift();
    }

    // Check if the message is the title of the current painting
    if (message.text.toLowerCase() === currentPaintingTitle.toLowerCase()) {
      // If it is, fetch and broadcast a new painting
      fetchAndBroadcastPainting();

      // Notify all clients who guessed the painting correctly
      io.emit("correctGuess", socket.nickname);
    } else {
      // If not, simply broadcast the message as before
      io.emit("message", message);
    }
  });

  socket.on("disconnect", () => {
    connectedUsers = connectedUsers.filter((user) => user !== socket.nickname);
    io.emit("connectedUsers", connectedUsers);
  });

  if (currentPainting) {
    socket.emit("painting", currentPainting);
  }
});

http.listen(port, () => {
  console.log("listening on http://localhost:" + port);
});
