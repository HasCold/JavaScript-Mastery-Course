// ******************************* Intro to events ************************
// event -->> kuch kaam hona ; yani koi user jab kisi button pr click kare tu koi action ho
// eg:- Button press

// Event add krne ka 3 tareeqa ha
const btn = document.querySelector(".btn-headline");
console.dir(btn); // btn button ki properties ma se ham onclick ko fire karenge
// btn.onclick = function(){
//     console.log("you clicked Me!");  // Not Preferable way to use this 
// }   

// Another way

// method --- addEventListener

// function clickMe(){
//     console.log("You CLicked ME!");
// }
//                    Event , Function Write OR Envoke
// btn.addEventListener("click", function(){
//     console.log("You Clicked ME!");
// });


btn.addEventListener("click", ()=>{
    console.log("Arrow Function Clicked ME!");
})

