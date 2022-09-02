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

//implement active link in header
document.querySelector(".navlinks").addEventListener("click", (e) => {
  e.preventDefault();
  const clicked = e.target;
  console.log(clicked);
  if (clicked.classList.contains("header--link")) {
    document.querySelectorAll(".header--link").forEach((link) => {
      link.classList.remove("actives");
    });
    clicked.classList.add("actives");
  }
});
//implement intersection observer API
