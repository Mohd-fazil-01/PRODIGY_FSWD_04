const socket = io();

const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesContainer = document.getElementById('messages');


sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message) {
   
    socket.emit('chat message', { message: message, sender: 'me' });
    messageInput.value = '';
  }
});


socket.on('chat message', (data) => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');

  if (data.sender === 'me') {
    messageElement.classList.add('right');
  } else {
    messageElement.classList.add('left');
  }

  messageElement.textContent = data.message;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
});
