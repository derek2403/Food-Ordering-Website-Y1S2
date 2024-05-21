document.addEventListener('DOMContentLoaded', function() {
    sendMessage("Hi, Welcome to Savoury Sandwich. How can we help you today? Enter 1 for delivery issues, 2 for collaboration or join us.", 'bot');
});

let botState = 0;

function sendMessage(messageText, sender) {
    const chatMessages = document.getElementById('chat-messages');

    const message = document.createElement('div');
    message.classList.add('message', sender);
    message.textContent = messageText;
    chatMessages.appendChild(message);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    if (sender === 'user') {
        botReply(messageText.trim());
    }
}

function userSendMessage() {
    const messageInput = document.getElementById('message-input');

    if (messageInput.value.trim() !== '') {
        sendMessage(messageInput.value, 'user');
        messageInput.value = '';
    }
}

function botReply(option) {
    setTimeout(function() {
        switch (botState) {
            case 0:
                if (option === '1') {
                    sendMessage("You selected delivery issues. Enter 1 for estimated arrival, 2 for food not delivered, 3 for change delivery address", 'bot');
                    botState = 1;
                } else if (option === '2') {
                    sendMessage("You selected collaboration or join us. Enter 1 to join us as a staff, 2 for franchise", 'bot');
                    botState = 2;
                } else {
                    sendMessage("I'm sorry, I didn't understand that. Enter 1 for delivery issues, 2 for collaboration or join us.", 'bot');
                }
                break;
            case 1:
                sendMessage("Sorry for the inconvenience, our customer representative will attend you shortly. Enter 1 for delivery issues, 2 for collaboration or join us.", 'bot');
                botState = 0;
                break;
            case 2:
                if (option === '1') {
                    sendMessage("We have plenty of vacancies available across all our branches. Please check with the respective branch for more info. You can contact them at 0361241111(KL) / 0361242222(PJ) / 0361243333(Ampang) / 0361244444(Cheras)", 'bot');
                    botState = 0;
                } else if (option === '2') {
                    sendMessage("Please hold for a second, our customer representative will attend you shortly.", 'bot');
                    botState = 0;
                } else {
                    sendMessage("I'm sorry, I didn't understand that. Enter 1 to join us as a staff, 2 for franchise", 'bot');
                }
                break;
            default:
                sendMessage("I'm sorry, I didn't understand that. Enter 1 for delivery issues, 2 for collaboration or join us.", 'bot');
                botState = 0;
                break;
        }
    }, 1000);
}
