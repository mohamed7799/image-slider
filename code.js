"use strict"

let imgs = [...document.getElementsByTagName("img")];

let btns = document.getElementById("img-btns");

let dots = [...document.getElementsByClassName("dot")];

let index = 0;


let move = function (i) {

    imgs.forEach((ele) => {
        ele.classList.add("hide");
    })
    imgs[i].classList.remove("hide");
    imgs[i].classList.add("selected");

    dots.forEach((ele) => {
        ele.classList.add("hide-dot");
    })
    dots[i].classList.remove("hide-dot");
    dots[i].classList.add("selected-dot");


}

btns.addEventListener("click", (e) => {

    if (e.target.id === "increase") {

        index++;
        if (index >= imgs.length) {
            index = 0;
        }
        move(index);
    }
    else {

        index--;
        if (index <= 0) {
            index = imgs.length - 1;
        }
        move(index);

    }
})