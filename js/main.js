// nav drop down
let navDropDown = document.getElementById("nav-dropdown");
let dropDownMenu = document.getElementById("dropdown-menu");
let navTeam = document.getElementById("nav-team");
let navContact = document.getElementById("nav-contact");
let navDeepDropDown = document.getElementById("nav-deep-dropdown");
let deepDropDownMenu = document.getElementById("nav-deep-dropdown-menu");
let nextDeep = document.getElementById("next-deep");
let prevDeep = document.getElementById("prev-deep");
navDropDown.addEventListener("mouseover", () => {
  dropDownMenu.removeAttribute("hidden");
});
let deepHide = () => {
  deepDropDownMenu.setAttribute("hidden", "hidden");
};
let dropDownHide = () => {
  dropDownMenu.setAttribute("hidden", "hidden");
  deepHide();
};
dropDownMenu.addEventListener("mouseleave", dropDownHide);
navTeam.addEventListener("mouseover", dropDownHide);
navContact.addEventListener("mouseover", dropDownHide);
navDeepDropDown.addEventListener("mouseover", () => {
  deepDropDownMenu.removeAttribute("hidden");
});
deepDropDownMenu.addEventListener("mouseleave", deepHide);
nextDeep.addEventListener("mouseover", deepHide);
prevDeep.addEventListener("mouseover", deepHide);
// portfolio nav and cards control
let portfolioNav = document.getElementById("portfolio-nav");
let portfolioCards = document.getElementsByClassName("portfolio-card");
let portfolioNavItems = document.getElementsByClassName("portfolio-nav-item");
portfolioNav.addEventListener("click", (e) => {
  let current = e.target;
  let currentType = current.dataset.type;
  if (current.tagName == "LI") {
    if (currentType != "all") {
      for (let index = 0; index < portfolioCards.length; index++) {
        const card = portfolioCards[index];
        card.setAttribute("hidden", "hidden");
      }
      for (let index = 0; index < portfolioCards.length; index++) {
        const card = portfolioCards[index];
        let cardType = card.dataset.type;
        if (currentType == cardType) card.removeAttribute("hidden");
      }
    } else {
      for (let index = 0; index < portfolioCards.length; index++) {
        const card = portfolioCards[index];
        card.removeAttribute("hidden");
      }
    }
    for (let index = 0; index < portfolioNavItems.length; index++) {
      const item = portfolioNavItems[index];
      item.classList.remove("active");
    }
    current.classList.add("active");
  }
});
// owl library
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 100,
    loop: true,
    items: 6,
    dotsEach: true,
  });
});
// nav control
let navList = document.getElementsByClassName("navList");
window.addEventListener("scroll", () => {
  let current = document.documentElement.scrollTop;
  for (let index = 0; index < navList.length; index++) {
    const navItem = navList[index];
    navItem.classList.remove("active");
    }
    navDropDown.classList.remove("active");
  if (current <= 600) {
    navList[0].classList.add("active");
  } else if (current > 600 && current <= 1000) {
    navList[1].classList.add("active");
  } else if (current > 1000 && current <= 1600) {
    navList[2].classList.add("active");
  } else if (current > 1600 && current <= 3000) {
    navList[3].classList.add("active");
  } else if (current > 3500 && current <= 4100) {
    navList[4].classList.add("active");
  } else if (current > 4550 && current <= 5200) {
    navList[5].classList.add("active");
  } else {
    navDropDown.classList.add("active");
  }
});
