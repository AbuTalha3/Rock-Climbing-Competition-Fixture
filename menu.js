const menu = document.querySelector("#mobile-Menu");
const closeicons = document.querySelector(".crossicon");
const hamburger = document.querySelector(".menubars");

const showMenu = () => {
 menu.classList.toggle("show")
 hamburger.classList.toggle("hidden")
 closeicons.classList.toggle("hidden")
};

hamburger.addEventListener("click",() => {
  showMenu()
  console.log("anything")
})
closeicons.addEventListener("click",() => {
  showMenu()
})
