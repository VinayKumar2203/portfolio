const menu = document.getElementById("menu");
const remove = document.getElementById("remove");
const navItems = document.querySelector(".navItems");

menu.addEventListener("click", () => {
    navItems.style.display = "block"
    menu.style.display = "none";
    remove.style.display = "block";
});

remove.addEventListener("click", () => {
    navItems.style.display = "none"
    menu.style.display = "block";
    remove.style.display = "none";
});


document.addEventListener("DOMContentLoaded", function () {
const textArray = ['Front-end developer', 'backend developer', 'MERN Developer'];
let currentIndex = 0;
let homeChangeText = document.getElementById('homeChangeText');
function changeText() {
    console.log(textArray[currentIndex])
    homeChangeText.textContent = textArray[currentIndex];
}

function updateText() {
    currentIndex = (currentIndex + 1) % textArray.length;
    changeText();
}

setInterval(updateText, 2000);
changeText();
});