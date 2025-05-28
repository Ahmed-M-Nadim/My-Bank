"use strict";
const style =
  "padding: 20px; color: white; background: linear-gradient(#007acc, #0952bf, #03a1d8, #0916bf);font-family: sans-serif; border-radius:10px; text-shadow: 0.6px 0.6px black;border:1px solid white";

console.log(
  "%c                                             ▪◽⚜🤍💙Ahmed Mahmoud Nadim💙🤍⚜◽▪                                                       ",
  style
);

let myNewDay = Date();

console.log(myNewDay);
////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//======Create Variable======//
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const header = document.querySelector("header");
const buttonOpenModal = document.querySelectorAll(".btn--show-modal");
const buttonCloseModal = document.querySelector(".btn--close-modal");
const buttonScroll = document.querySelector(".btn--scroll-to");
const sections = document.querySelectorAll(".section");
const section1Features = document.querySelector("#section--1");
const section2Operations = document.querySelector("#section--2");
const section3Testimonials = document.querySelector("#section--3");
const nav = document.querySelector(".nav");
const navigationLink = document.querySelectorAll(".nav__link");
const operationTabContainer = document.querySelector(
  ".operations__tab-container"
);
const operationsTabs = document.querySelectorAll(".operations__tab");
const operationsContents = document.querySelectorAll(".operations__content");
const featuresImages = document.querySelectorAll(".features__img");
const slides = document.querySelectorAll(".slide");
const btnSliderLeft = document.querySelector(".slider__btn--left");
const btnSliderRight = document.querySelector(".slider__btn--right");

////////////////////////////////////////////////////////////////////////////////

//======Create Global Function For Modal======//
//======Close Button======//
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
buttonCloseModal.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
overlay.addEventListener("click", closeModal);
/////////////////////////////////////////////////////////////////////////////////
//======Open Button======//
const openModal = (e) => {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

buttonOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});
////////////////////////////////////////////////////////////////////////////////
//====== Scroll Button======//
buttonScroll.addEventListener("click", () => {
  section1Features.scrollIntoView({ behavior: "smooth" });
});
////////////////////////////////////////////////////////////////////////////////
//======Nav Link Navigation======//
navigationLink.forEach((lnk) => {
  let lnkAtt = lnk.getAttribute("href");
  lnk.addEventListener("click", (e) => {
    e.preventDefault();
    if (lnkAtt.includes("section")) {
      document
        .querySelector(`${lnkAtt}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////
//======Operation Section======//
operationTabContainer.addEventListener("click", (e) => {
  //=======TAB======//
  const clickedTab = e.target.closest(".operations__tab");
  const dataNum = e.target.getAttribute("data-tab");
  operationsTabs.forEach((opTab) =>
    opTab.classList.remove("operations__tab--active")
  );

  clickedTab.classList.add("operations__tab--active");
  console.log(clickedTab);
  //======Content======//
  operationsContents.forEach((opCont) => {
    opCont.classList.remove("operations__content--active");
    if (opCont.classList.contains(`operations__content--${dataNum}`)) {
      opCont.classList.add("operations__content--active");
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////
//======NAV  link Fading out======//
nav.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("nav__link")) {
    const navOverTarget = e.target;
    const otherNavOver = navOverTarget
      .closest(".nav")
      .querySelectorAll(".nav__link");
    const logo = navOverTarget.closest(".nav").querySelector("img");
    otherNavOver.forEach((navOver) => {
      if (navOver !== navOverTarget) {
        navOver.style.opacity = 0.5;
        logo.style.opacity = 0.5;
      }
    });
  }
});

nav.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("nav__link")) {
    const navOverTarget = e.target;
    const otherNavOver = navOverTarget
      .closest(".nav")
      .querySelectorAll(".nav__link");
    const logo = navOverTarget.closest(".nav").querySelector("img");
    otherNavOver.forEach((navOver) => {
      if (navOver !== navOverTarget) {
        navOver.style.opacity = 1;
        logo.style.opacity = 1;
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////
//======Sticky Navigation======//
const fixNav = function (entries, observer) {
  // const entry = entries[0];
  // console.log(entry);
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("sticky");
      nav.style.transition = "all 0.2s";
    } else if (entry.isIntersecting) {
      nav.classList.remove("sticky");
    }
  });
};

const fixObject = {
  root: null,
  threshold: 0.125,
};

const Observer = new IntersectionObserver(fixNav, fixObject);
const navObserver = Observer.observe(header);
////////////////////////////////////////////////////////////////////////////////
//======Reveal Section using Intersection API on scrolling======//

const sectionsCallBack = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
};

const sectionsObject = {
  root: null,
  threshold: 0.15,
};

const sectionsObserver = new IntersectionObserver(
  sectionsCallBack,
  sectionsObject
);

sections.forEach(function (section) {
  sectionsObserver.observe(section);
  section.classList.add("section--hidden");
});
/////////////////////////////////////////////////////////////////////////////////
//======Change Image appearance in Features section======//
const imageCallFunction = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  if (entry.isIntersecting) {
    entry.target.src = entry.target.dataset.src;
    entry.target.classList.remove("lazy-img");
  }
};

const imageObject = {
  root: null,
  threshold: 0.25,
};

const Observer1 = new IntersectionObserver(imageCallFunction, imageObject);
featuresImages.forEach((img) => Observer1.observe(img));
////////////////////////////////////////////////////////////////////////////////
//======Slider Section======//
let currentS = 0;
const maxSlide = slides.length - 1;
slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${i * 100}%)`;
});

btnSliderRight.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentS === maxSlide) {
    currentS = 0;
  } else {
    currentS++;
  }
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - currentS) * 100}%)`;
  });
});
