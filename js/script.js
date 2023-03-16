const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 100);
});

const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
};

const mainImg = document.querySelector("#mainImg");
const smallImgList = document.querySelectorAll(".small-img");

smallImgList.forEach((smallImg) => {
    smallImg.addEventListener("click", function () {
        mainImg.src = smallImg.src;
    });
});

console.log(smallImgList);
// smallImgList[0].onclick = () => {
//     mainImg.src = smallImgList[0].src;
// };
// smallImgList[1].onclick = () => {
//     mainImg.src = smallImgList[1].src;
// };
// smallImgList[2].onclick = () => {
//     mainImg.src = smallImgList[2].src;
// };
// smallImgList[3].onclick = () => {
//     mainImg.src = smallImgList[3].src;
// };
