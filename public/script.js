// Event listener for the 'Send' button
document.getElementById("sendButton").addEventListener("click", function() {
    var userInput = document.getElementById("userInput").value;  // Get user input

    if (userInput.trim() !== "") {
        // Display user message in the chatbot area
        var chatbot = document.getElementById("chatbot");
        chatbot.innerHTML += "<p><strong>You:</strong> " + userInput + "</p>";
        
        // Clear the input field after sending
        document.getElementById("userInput").value = "";

        // Simulate a chatbot response (you can modify this for your chatbot logic)
        chatbot.innerHTML += "<p><strong>Chatbot:</strong> I'm still learning, but I'll try to help!</p>";
    }
});
