// bubbles.js

// Inject CSS for bubbles into the document head
const style = document.createElement('style');
style.textContent = `
  .bubble {
    position: fixed;
    bottom: -50px;
    background: rgba(181, 91, 59, 0.7);
    border-radius: 50%;
    opacity: 0.7;
    animation-name: floatUp;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
  }

  @keyframes floatUp {
    0% {
      transform: translateY(0);
      opacity: 0.7;
    }
    100% {
      transform: translateY(-110vh);
      opacity: 0;
    }
  }

  .bubble-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    overflow: hidden;
    z-index: 1000;
  }
`;
document.head.appendChild(style);

const bubbleContainer = document.getElementById('bubbles');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = Math.random() * 100 + 'vw';
  const size = Math.random() * 20 + 10;
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';
  bubble.style.animationDuration = Math.random() * 3 + 2 + 's';
  bubbleContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 5000);
}

// Create bubbles on page load
window.addEventListener('load', () => {
  for (let i = 0; i < 30; i++) {
    setTimeout(createBubble, i * 200);
  }
});