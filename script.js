const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const typing = document.getElementById("typing");
const openChat = document.getElementById("chatbot-icon-small");
const visibility = document.getElementById("chat-visible");

visibility.style.display = "none";

openChat.addEventListener("click", function() {
    if (visibility.style.display == "none") {
        visibility.style.display = "flex";
        document.getElementById("temp-message").style.display = "none";
        console.log('open');
    }
    else {
        visibility.style.display = "none";
        console.log('close');
    }
    
});


const responses = {
    hello: "Hello! Nice to meet you! I'm Penguinity, ask me anything! I know everything. =)",
    hi: "Hey there! I'm your virtual assistant. How can I help?",
    "how are you": "I'm more than a chatbot...I'm doing great. ",
    name: "My name is Penguinity!",
    help: "I can answer a few simple questions. Try saying hello or asking my name.",
    thanks: "You're welcome!",
    thank: "Thanksies!",
    bye: "Goodbye! Have a great day! Please come back soon."
};

function addMessage(text, sender) {
    const message = document.createElement("div");
    message.classList.add("message", sender);

    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.textContent = text;

    message.appendChild(bubble);
    chatMessages.appendChild(message);

   
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
    const text = message.toLowerCase().trim();

    
    if (responses[text]) {
        return responses[text];
    }

    
    if (text.includes("hello") || text.includes("hey")) {
        return "Hey! What's up?";
    }

    if (text.includes("are") && text.includes("you") && text.includes("ai")) {
        return "I am not an AI chatbot, but I can do as much!";
    }

    if (text.includes("your name")) {
        return "I'm Penguinity!";
    }

    if (text.includes("cybersecurity")) {
        return "Can you specify what you would like to learn about? I'm here to help. If you've been affected by a cyber incident, tell me what happened. For example, a hacked account, scam, phishing message, malware, or exposed personal information, and I'll guide you through the next steps.";
    }

    if (text.includes("scam")) {
        return "If you need help with scams or scam prevention, don't panic. Stop communicating with the scammer, don't send any more money or information, and save screenshots, messages, receipts, and other evidence. If you shared financial or account information, contact your bank or service provider immediately and secure your accounts.";
    }

    if (text.includes("doxx") || text.includes("phishing") || text.includes("deepfake")) {
        return "Prioritize your safety. Don't confront the person responsible. Save evidence, report the exposed information to the relevant platform, review your privacy settings, and ask websites hosting your information about removal. If you're being threatened or feel physically unsafe, contact local authorities or someone you trust.";
    }

    if (text.includes("guide")) {
        return "I'm more than willing to help you with anything! Tell me what happened and I'll walk you through it step by step. Don't share passwords, authentication codes, recovery codes, or other sensitive information with me.";
    }

    if (text.includes("hack")) {
        return "If you think you've been hacked, don't panic. Disconnect the affected device from the internet if necessary, change compromised passwords from a trusted device, enable two-factor authentication, review recent account activity, and sign out of unknown sessions. Don't send me your passwords or security codes.";
    }

    if (text.includes("virus")) {
        return "Stop opening suspicious files or links and disconnect it from the internet if appropriate. Run a security scan using trusted security software, install available updates, and change important passwords from a separate trusted device if you suspect they were stolen.";
    }

    if (text.includes("naked")) {
        return "If someone is threatening to share intimate images of you, don't pay or send them more content. Save evidence, stop communicating with the person if it's safe to do so, report the account, and tell someone you trust. If you're being threatened or extorted, consider contacting local authorities or a relevant support service.";
    }

    return "Hmm...I don't know how to answer that yet. Please ask another question with no typos or add a clear keyword of the problem that you're struggling with! (hack, scam, doxx)";
}

function sendMessage() {
    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    
    addMessage(message, "user");

    
    userInput.value = "";

    
    typing.style.display = "block";

    
    setTimeout(() => {
        typing.style.display = "none";

        const response = getBotResponse(message);
        addMessage(response, "bot");
    }, 700);
}


sendButton.addEventListener("click", sendMessage);


userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});