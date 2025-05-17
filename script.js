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
buttonScroll.addEventListener("click", function () {
  // const scrollFeatures = section1Features.getBoundingClientRect();
  // window.scrollTo(
  //   scrollFeatures.left + window.pageXOffset,
  //   scrollFeatures.top + window.pageYOffset
  // );
  section1Features.scrollIntoView({ behavior: "smooth" });
});
//////////////////////////////////////// ////////////////////////////////////////
