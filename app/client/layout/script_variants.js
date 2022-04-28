var firstVar = document.getElementById("first_variant");
var secondVar = document.getElementById("second_variant");
var thirdOVar = document.getElementById("third_variant");

firstVar.onclick = (event) => {
    firstVar.style = "border-bottom: 4px solid #df7d00; color: #df7d00";
    secondVar.style = "border: 0px; color: #ffffff";
    thirdOVar.style = "border: 0px: #272929; color: #ffffff";
}

secondVar.onclick = (event) => {
    firstVar.style = "border: 0px; color: #ffffff";
    secondVar.style = "border-bottom: 4px solid #df7d00; color: #df7d00";
    thirdOVar.style = "border: 0px; color: #ffffff";
}

thirdOVar.onclick = (event) => {
    firstVar.style = "border: 0px; color: #ffffff";
    secondVar.style = "border: 0px; color: #ffffff";
    thirdOVar.style = "border-bottom: 4px solid #df7d00; color: #df7d00";
}