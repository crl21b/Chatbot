function sendMessage() {
    const userInput = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    // Get user input
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    // Display user message
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("message", "user");
    userMessageDiv.textContent = userMessage;
    chatBox.appendChild(userMessageDiv);

    // Clear input field
    userInput.value = "";

    // Auto-scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Bot response logic
    setTimeout(() => {
        const botMessageDiv = document.createElement("div");
        botMessageDiv.classList.add("message", "bot");
        botMessageDiv.textContent = getBotResponse(userMessage);
        chatBox.appendChild(botMessageDiv);

        // Auto-scroll to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}

// Chatbot response logic
function getBotResponse(input) {
    const lowerCaseInput = input.toLowerCase();

    // Predefined responses
    const responses = {
        "hello": "Hi there! How are you feeling today?",
        "hi": "Hello! How can I support you?",
        "i'm lonely": "I'm here for you. Would you like to talk about your feelings or get tips on making friends?",
        "how do i make friends": "Making friends starts with small steps. Try joining groups or activities that interest you and smile often!",
        "i feel anxious": "Take a deep breath with me. Inhale... Exhale... Can you share what’s making you feel this way?",
        "bye": "Take care! Remember, I’m always here if you need a friend.",
        "thank you": "You're welcome! I'm glad I could help."
    };

    // Default response if no match is found
    return responses[lowerCaseInput] || "I’m here to listen. Can you tell me more about what’s on your mind?";
}
