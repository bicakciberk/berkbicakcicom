let day = document.querySelector("#day");
let night = document.querySelector("#night");
let body = document.querySelector("body");
let headers = document.querySelectorAll(".header");
let paragraphs = document.querySelectorAll(".paragraph");
let border = document.querySelector(".border");
let icons = document.querySelectorAll(".icon");
let activities = document.querySelectorAll(".activity");
let cards = document.querySelectorAll(".card");

let change = () => {
  day.classList.toggle("hidden");
  night.classList.toggle("hidden");
  body.classList.toggle("body-night")
  headers.forEach((header) => {
    header.classList.toggle("header-night");
  });
  paragraphs.forEach((paragraph) => {
    paragraph.classList.toggle("paragraph-night");
  });
  border.classList.toggle("border-night");
  icons.forEach((icon) => [icon.classList.toggle("icon-night")]);
  activities.forEach((activity) => {
    activity.classList.toggle("activity-night");
    console.log(activity);
    
  });

  if (body.classList.contains("body-night")) {
    localStorage.setItem("theme", "dark");
} else {
    localStorage.setItem("theme", "light");
}
};

day.addEventListener("click", change);
night.addEventListener("click", change);


if (localStorage.getItem("theme") === "dark") {
    change();
}

const glow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * 0.12;
  currentY += (mouseY - currentY) * 0.12;

  glow.style.left = currentX + "px";
  glow.style.top = currentY + "px";

  requestAnimationFrame(animate);

  
}

animate();
