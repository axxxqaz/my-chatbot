function sendMessage() {
    const userInput = document.getElementById("userInput");
    const message = userInput.value;
    if (message.trim() === "") return;

    displayMessage(message, "user");
    userInput.value = "";

    // Simulated bot response
    let botResponse = "I'm not sure how to respond to that.";
    
    if (message.includes("hello")) {
        botResponse = "Hello! How can I assist you?";
    } else if (message.includes("bye")) {
        botResponse = "Goodbye! Have a great day!";
    } else if (message.includes("help")) {
        botResponse = "Sure! What do you need help with?";
    }

    setTimeout(() => {
        displayMessage(botResponse, "bot");
    }, 1000); // Simulate a delay for bot response
}

function displayMessage(message, sender) {
    const chatbox = document.getElementById("chatbox");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the bottom
}
