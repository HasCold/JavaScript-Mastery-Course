// 1. compilation phase
// 2. code execution phase

// why compilation

// How JavaScript code executes  -->> Also in our Interview perspective
//    Detailed discussion also written in the Notebook

// In ES6 :- (1) Early Error Checking of the code
            //  (2) Determining Appropriate  Scope Variable (DASV)  

// what is   global execution context ?
// what is   local execution context ?
// closures

console.log(this);
console.log(window); // Browser k aaspect se window ak global object ha jabke node ke environment ma window kuch aur hoga
console.log(firstName);
var firstName = "Hasan";
console.log(firstName);

console.log(myFunc);
function myFunc(){
    console.log("This is my function");
}
var lastName = "Ali";
var FullName = firstName + " " + lastName;
console.log(FullName);

