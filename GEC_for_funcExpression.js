// Global Execution Context    (GEC)
// function expression

console.log(myFunc);  // Undefined
var myFunc = function(){ // also called anonymous function expression
    console.log("This is my function");
}
console.log(myFunc);
// Explanation
// jab ma function declaration print kara raha tha tab wo creation phase yani global memory ma as it is add hojata tha lkn  
// Jab ham function expression yani var k through declare krarahe ha tu ye Global execution context ke 1. step ke creation phase ma undefined set hogi jaise hamari dosre variable ki value set horahi thi;


