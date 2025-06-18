function createHearts(num) {
  for (let i = 0; i < num; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 5 + "s";
    document.body.appendChild(heart);
  }
}

createHearts(210);

// function showLove() {
//   const name = document.getElementById("nameInput").value;
//   const date = document.getElementById("dateInput").value;
//   if (name && date) {
//     alert(`Love you ${name}! 💕\nSince ${date}, every day is special.`);
//   } else {
//     alert("Please fill both fields 💗");
//   }
// }
