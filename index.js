//Get elements
const background = document.querySelector('body')
const display = document.getElementById('display')
const buttons = document.querySelectorAll('.buttons button')

//Add event listeners

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            calculate();
        } else if (button.textContent === "C") {
            clearDisplay();
        } else {
            appendToDisplay(button.textContent);
        }
    });
});

//Functions

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = ""
}

function calculate() {
    const expression = display.value;
    const result = eval(expression); // WARNING: Using eval can be dangerous, consider alternatives
    display.value = result;
  
    if (result > 100) {
      renderConfetti();
    }
  }
  
  function renderConfetti() {
    const confettiStyles = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
    `;
  
    const confettiContainer = document.createElement('div');
    confettiContainer.style = confettiStyles;
  
    // Create confetti elements
    const confettiColors = ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'];
    const confettiCount = 300; // Increase the number of confetti elements
    for (let i = 0; i < confettiCount; i++) {
      const confettiPiece = document.createElement('div');
      confettiPiece.style = `
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: ${confettiColors[Math.floor(Math.random() * confettiColors.length)]};
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation: fall ${Math.random() * 2 + 1}s linear infinite;
      `;
      setTimeout(() => {
        document.body.removeChild(confettiContainer);
      }, 2000);
      confettiContainer.appendChild(confettiPiece);
    }
  
    // Append confetti container to the body
    document.body.appendChild(confettiContainer);
  }
