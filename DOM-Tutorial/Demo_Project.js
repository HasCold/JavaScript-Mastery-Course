const MainBtn = document.querySelector("button");
const Body = document.body; // In JavaScript, the document.body contains all of the properties and methods of the body tag. For example, the backgroundColor property specifies the body tag’s background color, which means the whole document’s body color can be modified using this property. The backgroundColor property is available in the style object of the document.body, so we can easily use it in the JavaScript code.
const currentColor = document.querySelector(".current-color");

function randomColorGenerator(){
    // The Math.floor() function always rounds down and returns the largest integer less than or equal to a given number.
    // Math.random() * 10; -->> gives the number between 0 and 9
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}

MainBtn.addEventListener("click", ()=>{
const randomColor = randomColorGenerator();   // sare Color ki rgb values 0 -- 255 tak jati ha
// Math.floor(Math.random() * 10)  --> This statement gives you the integer number between 0 to 9
// 8  
Body.style.backgroundColor = randomColor;
currentColor.textContent = randomColor;
})
