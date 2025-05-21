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
const buttonOpenModal = document.querySelectorAll(".btn--show-modal");
const buttonCloseModal = document.querySelector(".btn--close-modal");
const buttonScroll = document.querySelector(".btn--scroll-to");
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

//////////////////////////////////////// ////////////////////////////////////////

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
//////////////////////////////////////// /////////////////////////////////////////
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
//////////////////////////////////////// ////////////////////////////////////////
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
///////////////////////////////////////// ////////////////////////////////////////
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
//////////////////////////////////////// /////////////////////////////////////////
//======NAV  link Fading out======//
