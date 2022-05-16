"use strict";
//implemet scroll to contact section
console.log(document.querySelectorAll(".button"));
document.querySelectorAll(".button").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click");
    document.querySelector(".call").scrollIntoView({
      behavior: "smooth",
    });
  })
);
//implement header carousel
const slides = document.querySelectorAll(".slide");
slides.forEach((s, i) => {
  s.style.transform = `translateX(${i * 100}%)`;
});
let count = 0;
// right button
document.querySelector(".arrow-right").addEventListener("click", (e) => {
  e.preventDefault();
  if (count === slides.length - 1) count = 0;
  else count++;
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - count)}%)`;
  });
});
// left button
document.querySelector(".arrow-left").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  if (count < 1) count = slides.length - 1;
  else count--;
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - count)}%)`;
  });
});
//implement active link in header
document.querySelector(".navlinks").addEventListener("click", (e) => {
  e.preventDefault();
  const clicked = e.target;
  console.log(clicked);
  if (clicked.classList.contains("header--link")) {
    document.querySelectorAll(".header--link").forEach((link) => {
      link.classList.remove("active");
    });
    clicked.classList.add("active");
  }
});
//implement intersection observer API
