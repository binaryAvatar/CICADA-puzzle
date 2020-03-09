function passwordVerify(word) {

    let pass = "LolaMontez";
    let pass2 = "Lola Montez";


    if ((word.toLowerCase() == pass.toLowerCase()) || (word.toLowerCase() == pass2.toLowerCase())) {

        let b1 = document.getElementById("verify");
        let b2 = document.getElementById("goFurther");

        b1.style.visibility = "hidden";
        b2.style.visibility = "visible";
        myLink.innerHTML = "";
    } else {

        myLink.innerHTML = "You are a loser!";

    }

}

function getOut() {
    let b = document.getElementById("result2");
    b.style.visibility = "visible";
}

let attempt = document.querySelector('#myPass');
let firstButton = document.querySelector('#verify');
let secretButton = document.querySelector('#goFurther');
let myLink = document.querySelector('#result');
let myLink2 = document.querySelector('#result2');


firstButton.addEventListener('click', function (e) {
    let a = String(attempt.value);
    passwordVerify(a);
})

secretButton.addEventListener('click', function (e) {

    getOut();

})
