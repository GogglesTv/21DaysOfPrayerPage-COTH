"use strict";

const about = document.querySelector(".collapsedInfo");
const sidebar = document.querySelector(".sidebar");
const aboutSidebar = sidebar.querySelector(".sidebar-close");

function openNav() {
  sidebar.style.width = "650px";
  sidebar.style.padding = "60px";
}

function closeNav() {
  sidebar.style.width = "0";
  sidebar.style.padding = "0";
}

about.addEventListener("click", () => {
  openNav();
});

sidebar.addEventListener("click", () => {
  closeNav();
});

aboutSidebar.addEventListener("click", () => {
  closeNav();
});

const masonryCards = document.getElementById("masonryCards");

if (window.innerWidth >= 992) {
  console.log("I'm less than 991");
  masonryCards.dataset.masonry = '{"percentPosition": true }';
}
