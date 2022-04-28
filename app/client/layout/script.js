var firstOne = document.getElementById("first_category");
var secondOne = document.getElementById("second_category");
var thirdOne = document.getElementById("third_category");
var fourthOne = document.getElementById("fourth_category");

firstOne.onclick = (event) => {
    firstOne.style = "border-bottom-color: #df7d00; color: #df7d00";
    secondOne.style = "border-bottom-color: #ffffff; color: #676565";
    thirdOne.style = "border-bottom-color: #ffffff; color: #676565";
    fourthOne.style = "border-bottom-color: #ffffff; color: #676565";
}

secondOne.onclick = (event) => {
    firstOne.style = "border-bottom-color: #ffffff; color: #676565";
    secondOne.style = "border-bottom-color: #df7d00; color: #df7d00";
    thirdOne.style = "border-bottom-color: #ffffff; color: #676565";
    fourthOne.style = "border-bottom-color: #ffffff; color: #676565";
}

thirdOne.onclick = (event) => {
    firstOne.style = "border-bottom-color: #ffffff; color: #676565";
    secondOne.style = "border-bottom-color: #ffffff; color: #676565";
    thirdOne.style = "border-bottom-color: #df7d00; color: #df7d00";
    fourthOne.style = "border-bottom-color: #ffffff; color: #676565";
}

fourthOne.onclick = (event) => {
    firstOne.style = "border-bottom-color: #ffffff; color: #676565";
    secondOne.style = "border-bottom-color: #ffffff; color: #676565";
    thirdOne.style = "border-bottom-color: #ffffff; color: #676565";
    fourthOne.style = "border-bottom-color: #df7d00; color: #df7d00";
}