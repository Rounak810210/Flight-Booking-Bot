const chatContainer = document.getElementById('chat-container');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const message = userInput.value.trim();
  if (message === '') return;
  appendMessage('user', message);
  userInput.value = '';
  processMessage(message);
});

function appendMessage(sender, message) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(`${sender}-message`);
  messageDiv.textContent = message;
  chatContainer.appendChild(messageDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function processMessage(message) {
  // Simple keyword-based processing
  let response = '';

  if (message.toLowerCase().includes('book') && message.toLowerCase().includes('flight')) {
    response = 'Sure, I can help you with booking a flight. Please provide the following details:\n- Departure City\n- Destination City\n- Departure Date\n- Return Date (if any)\n- Number of Passengers';
  } else if (message.toLowerCase().includes('from') && message.toLowerCase().includes('to')) {
    // Simulate flight options
    response = 'Here are some flight options:\n1. Airline A - 10:00 AM - $200\n2. Airline B - 2:00 PM - $250\n3. Airline C - 6:00 PM - $180\nPlease select an option to proceed with booking.';
  } else if (message.match(/^\d+$/)) {
    response = 'Great choice! Please provide the passenger details to complete the booking.';
  } else {
    response = "I'm sorry, I didn't understand that. Could you please rephrase?";
  }

  setTimeout(() => {
    appendMessage('bot', response);
  }, 1000);
}
