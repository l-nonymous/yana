const confettiContainer = document.querySelector('.confetti-container');

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    // Include your desired emojis
    const emojis = ['🎉', '🎊', '🎈', '✨', '🎁'];
    confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    // Use more vibrant colors
    const colors = ['#FF6347', '#FFA500', '#FFD700', '#32CD32', '#1E90FF', '#DA70D6'];
    confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 5 + 5 + 's'; // Slower fall
    confetti.style.fontSize = (Math.random() * 24 + 16) + 'px';

    confettiContainer.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 10000);
}

// Generate confetti less frequently
setInterval(() => {
    createConfetti();
}, 1000); // Reduced frequency to every 1 second



// Play the audio when the user interacts with the page
document.body.addEventListener('click', function() {
    document.getElementById('birthday-audio').play();
});

// Show the email box when the button is clicked
document.getElementById('openLetterButton').addEventListener('click', function() {
    const emailBox = document.getElementById('emailBox');
    emailBox.style.display = 'block'; // Make sure it's displayed
    setTimeout(() => {
        emailBox.style.opacity = '1'; // Fade in
    }, 10); // Small delay to ensure display change is applied
});

// Hide the email box and show the open button when the email box is clicked
document.getElementById('emailBox').addEventListener('click', function() {
    this.style.opacity = '0'; // Fade out
    setTimeout(() => {
        this.style.display = 'none'; // Hide the box
        document.getElementById('openLetterButton').style.display = 'block'; // Show button
    }, 1000); // Delay to match opacity transition duration
});
