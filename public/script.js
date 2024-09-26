const axios = require('axios');

document.getElementById("sendButton").addEventListener("click", async function() {
    var userInput = document.getElementById("userInput").value.trim();

    if (userInput === "") return;

    var chatbot = document.getElementById("chatbot");
    chatbot.innerHTML += "<p><strong>You:</strong> " + userInput + "</p>";

    document.getElementById("userInput").value = "";

    // Call OpenAI API to get chatbot response
    var response = await getBotResponse(userInput);
    chatbot.innerHTML += "<p><strong>Chatbot:</strong> " + response + "</p>";
});

async function getBotResponse(userInput) {
    const apiKey = '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';  // Replace with your OpenAI API key

    try {
        const res = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                model: "text-davinci-003",
                prompt: userInput,
                max_tokens: 100
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            }
        );
        return res.data.choices[0].text.trim();
    } catch (error) {
        console.error(error);
        return "I'm having trouble understanding that.";
    }
}

