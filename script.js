const text = "WELCOME TO AXIOM";
const typingText = document.getElementById("typing-text");
let index = 0;

function typeText() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 200); // adjust the speed (100ms)
  }
}

typeText();
                