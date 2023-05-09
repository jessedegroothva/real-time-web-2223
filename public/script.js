const socket = io({
  autoConnect: false,
});
const messages = document.querySelector("section ul");
const input = document.querySelector("input");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value) {
    socket.emit("message", input.value);
    input.value = "";
  }
});

// aciveer je het
socket.on("userConnected", (name) => {
  console.log(name);
  const joinMessage = document.createElement("li");
  joinMessage.classList.add("gameMsg");

  joinMessage.innerText = name;
  messages.appendChild(joinMessage);
});

socket.on("message", (message) => {
  addMessage(message);
});

socket.on("whatever", (message) => {
  addMessage(message);
});

socket.on("history", (history) => {
  history.forEach((message) => {
    addMessage(message);
  });
});

function addMessage(message) {
  messages.appendChild(
    Object.assign(document.createElement("li"), { textContent: message })
  );
  messages.scrollTop = messages.scrollHeight;
}

// api connection
const API_URL =
  "https://www.rijksmuseum.nl/api/en/collection?key=9ZKSEiYs&involvedMaker=Johannes%20Vermeer";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    // Get a random painting
    const painting =
      data.artObjects[Math.floor(Math.random() * data.artObjects.length)];
    // Set the source of the image element to the image URL
    const image = document.getElementById("painting-image");
    image.src = painting.webImage.url;
  })
  .catch((error) => console.log(error));

const params = new URLSearchParams(window.location.search);
const user = params.get("user");
if (user) {
  socket.auth = { user };
  socket.connect();
} else {
  console.error("No user specified in URL");
}
