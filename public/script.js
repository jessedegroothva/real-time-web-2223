const socket = io({
  autoConnect: false,
});
const messages = document.querySelector("#messages");
const input = document.querySelector("input");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value) {
    socket.emit("message", { user: socket.auth.user, text: input.value });
    input.value = "";
  }
});

socket.on("userConnected", (name) => {
  const joinMessage = document.createElement("li");
  joinMessage.classList.add("gameMsg");

  joinMessage.innerText = `${name} joined the chat`;
  messages.appendChild(joinMessage);
});

socket.on("message", (message) => {
  addMessage(message);
});

function addMessage(message) {
  // create a new list item
  const li = document.createElement("li");
  // add the username and text to the list item
  li.textContent = `${message.user}: ${message.text}`;
  // append the list item to the messages list
  messages.appendChild(li);
  // scroll to the bottom
  messages.scrollTop = messages.scrollHeight;

  // save the message in local storage
  let history = JSON.parse(localStorage.getItem("chatHistory")) || [];
  if (
    !history.some(
      (storedMessage) =>
        storedMessage.text === message.text &&
        storedMessage.user === message.user
    )
  ) {
    history.push(message);
    localStorage.setItem("chatHistory", JSON.stringify(history));
  }
}

window.addEventListener("load", () => {
  // load the history from local storage
  let history = JSON.parse(localStorage.getItem("chatHistory")) || [];
  history.forEach(addMessage);
});

// When you want to clear the chat history...
document.querySelector("#clear-button").addEventListener("click", () => {
  // clear the messages from the page
  messages.innerHTML = "";
  // clear the history from local storage
  localStorage.removeItem("chatHistory");
});

socket.on("history", (history) => {
  history.forEach((message) => {
    addMessage(message);
  });
});

const params = new URLSearchParams(window.location.search);
const user = params.get("user");
if (user) {
  socket.auth = { user };
  socket.connect();
} else {
  console.error("No user specified in URL");
}

socket.on("painting", (painting) => {
  const image = document.getElementById("painting-image");
  image.src = painting.webImage.url;
});

socket.on("correctGuess", (name) => {
  // Change the background color to green for a few seconds
  document.body.style.backgroundColor = "green";
  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 3000);

  // Add a message to the chat indicating who guessed correctly
  const correctGuessMessage = document.createElement("li");
  correctGuessMessage.textContent = `${name} guessed the painting correctly!`;
  messages.appendChild(correctGuessMessage);
});
