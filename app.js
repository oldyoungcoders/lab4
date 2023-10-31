var inputGradus = document.getElementsByTagName("input") [0];
console.log (inputGradus) ;
var result = document.getElementsByTagName("p") [0];
console.log(result) ;


var currentYear = (9/5) , gaRadus

function convert() {
    if (inputGradus.value > 55) {
        result.innerText = " Arai l haluun um bish shuu! ";
        result.style.color = "red";
    } else if(inputGradus.value < -55){
        result.innerText = " Het huiten um aa! ";
        result.style.color = "blue";
    } else if(inputGradus.value == ""){
        alert("Hooson utga baina.");
    } else {
        gaRadus = currentYear * inputGradus.value +32;
        result.innerText = "Fahreheit bol : " + gaRadus;
    }
}