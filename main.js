let open = document.getElementById("open_menu");
let close = document.getElementById("close_menu");
let menu = document.querySelector(".overlay");
let openMenu = function () {
  menu.style.transform = "translateX(0%)";
};
let closeMenu = function () {
  menu.style.transform = "translateX(200%)";
};
