const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

function addMessage(message, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userMessage) {
  // Simple keyword-based responses
  if (userMessage.toLowerCase().includes('hello')) {
    return 'Hello! How can I help you today?';
  } else if (userMessage.toLowerCase().includes('help')) {
    return 'Sure, I am here to assist you.';
  } else {
    return "Sorry, I didn't understand that.";
  }
}

chatForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = userInput.value.trim();
  if (message === '') return;
  addMessage(message, 'user');
  userInput.value = '';

  setTimeout(() => {
    const reply = botReply(message);
    addMessage(reply, 'bot');
  }, 500);
});
