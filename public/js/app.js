// Selection 

var captch_text = document.querySelector("#captch_text");
var captch_btn = document.querySelector(".captch_btn");
var check_btn = document.querySelector(".check_btn");
var captcha_field = document.querySelector("#captcha_field");
var msg = document.querySelector("#msg");

let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


captch_btn.addEventListener("click", function () {
    captch_text.innerText = "";
    getCaptcha();
})

function getCaptcha() {
    for (let i = 0; i < 6; i++) {

        const randomText = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captch_text.innerText += `${randomText}`;

    }

}
getCaptcha();


check_btn.addEventListener("click", function (event) {
    event.preventDefault();

    if (captcha_field.value === captch_text.textContent) {
        msg.innerHTML = "Yes, Captcha Matched :)";
        captcha_field.value = "";
        msg.style.color = "#4DB2EC";
        setTimeout(function () {
            captch_text.innerText = "";
            getCaptcha();
            captcha_field.value = "";
             msg.innerHTML ="";
        }, 4000);

    } else {
        msg.innerHTML = "Opps!, Captcha dosen't match :(";
        captcha_field.value = "";
        msg.style.color = "#ff0000";

    }

})