let myButton = document.querySelector("Button")
let pressed = 0;

function updateCounter() {
    
    pressed = pressed + 1;
    document.getElementById("counter").innerHTML = pressed;
 
}

myButton.addEventListener('click', updateCounter)