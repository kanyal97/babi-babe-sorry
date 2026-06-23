const text = `Dear Babi,

I am really sorry.
You mean everything to me.
Please forgive me ❤️`;

let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("message").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

typeWriter();

function acceptLove() {
  document.getElementById("popup").classList.remove("hidden");
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function () {
  let x = Math.random() * 300 - 150;
  let y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
