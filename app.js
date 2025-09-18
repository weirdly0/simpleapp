function changeGreeting() {
    const greeting = document.getElementById('greeting');
    greeting.textContent = greeting.textContent === 'Hello, World!'
        ? 'Have a great day!'
        : 'Hello, World!';
}