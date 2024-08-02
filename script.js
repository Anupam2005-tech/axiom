const text = "WELCOME TO AXIOM";
const typingText = document.getElementById("typing-text");
let index = 0;

function typeText() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}


typeText();
// let canvas = document.querySelector("#canvas");
// let ctx = canvas.getContext("2d");


// ctx.arc(165, 75, 60, 0, Math.PI * 2, false);
// ctx.shadowColor = "white";
// ctx.shadowBlur = 10;
// ctx.strokeStyle = "white";
// ctx.lineWidth = 5;

// ctx.stroke();
