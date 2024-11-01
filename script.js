document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('whatsapp-chat-button');
    const phoneNumber = '+8801327491315'; // Replace with your phone number

    chatButton.addEventListener('click', function(event) {
        event.preventDefault();
        const message = encodeURIComponent('Hello! I have a question.'); // Your predefined message
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappUrl, '_blank');
    });
});