let controller;
let slideScene;

function animateSlides() {
  // initialize controller
  controller = new ScrollMagic().Controller();
  // select elements
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");

  sliders.forEach((slide) => {
    const revealImg = slide.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");
  });
  //   GSAP
  gsap.to(revealImg, 1, { x: "100%" });
}

animateSlides();
