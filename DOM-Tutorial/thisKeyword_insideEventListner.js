// this keyword inside eventlistner

const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", function(){  // is function ma this ki value same hogi; 
//     console.log("You CLicked ME!");
//     console.log("Value of this");
//     console.log(this);
// })
console.log(this); // Jo "this" bahar hoga wahi "this" andr hoga 
btn.addEventListener("click", ()=>{  // Arrow function ma this ki value window hogi; Arrow function ka jo "this" hota ha wo ak level up hota 
    console.log("You CLicked ME!");
    console.log("Value of this");
    console.log(this);
})
