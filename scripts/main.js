const BTN = document.querySelector("#btnMobile");
const NAV = document.querySelector("#nav");

BTN.addEventListener("click", () => {

    NAV.style.height == "100%"? NAV.style.height = "0%" : NAV.style.height = "100%";

})