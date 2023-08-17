let circle = document.querySelector(".circle")
let button = document.querySelector(".btn")

let state = true
button.addEventListener("click", function () {
    if (state === true) {
        circle.classList.add("on");
        button.innerHTML = "Off";
        state = false;
    } else {
        circle.classList.remove("on");
        button.innerHTML = "On"
        state = true
    }
})