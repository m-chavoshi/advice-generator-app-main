const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    data = JSON.parse(this.responseText);

    console.log(data.slip.advice);
    document.querySelector('.header').innerHTML = "Advice #" + data.slip.id;
    document.querySelector('.advice').innerHTML = "\"" + data.slip.advice + "\"";

}
newAdvice()
function newAdvice() {
    xhttp.open("GET", "https://api.adviceslip.com/advice");
    xhttp.send();
}