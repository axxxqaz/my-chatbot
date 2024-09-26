
const apiKey = process.env.OPENAI_API_KEY;  // Retrieve the API key from the environment


document.getElementById("sendButton").addEventListener("click", async function() {
    var userInput = document.getElementById("userInput").value.trim();

    if (userInput === "") return;

    var chatbot = document.getElementById("chatbot");
    chatbot.innerHTML += "<p><strong>You:</strong> " + userInput + "</p>";

    document.getElementById("userInput").value = "";

    // Fetch the bot's response from OpenAI API
    var response = await getBotResponse(userInput);
    chatbot.innerHTML += "<p><strong>Chatbot:</strong> " + response + "</p>";
});

async function getBotResponse(userInput) {
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
                    'Authorization': `Bearer ${apiKey}`  // Use the environment variable
                }
            }
        );
        return res.data.choices[0].text.trim();
    } catch (error) {
        console.error(error);
        return "Sorry, I couldn't process that.";
    }
}


