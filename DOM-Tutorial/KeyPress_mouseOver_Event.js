// key press and mouseover Event

const body = document.body;  // sari ki sari body select hogae gi
// In JavaScript, the document.body contains all of the properties and methods of the body tag. For example, the backgroundColor property specifies the body tag’s background color, which means the whole document’s body color can be modified using this property. The backgroundColor property is available in the style object of the document.body, so we can easily use it in the JavaScript code.

body.addEventListener("keypress", (e)=>{
    console.log(e.key); // keypress { target: body, key: "a", charCode: 97, keyCode: 0 }
})

const mainButton = document.querySelector(".btn-headline");
console.log(mainButton);
mainButton.addEventListener("mouseover", ()=>{
    console.log("Mouseover Event occur");
})
// mouseleave event
mainButton.addEventListener("mouseleave", ()=>{
    console.log("Mouseleave Event occur");
})

