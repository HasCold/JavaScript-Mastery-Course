// ****************Closures*************

// closures : 30-40%
// analyse : 70-80%
// real example : 100%

// function can return function

function outerFunc(){
    function InnerFunc(){
        console.log("Hello World");
    }
    return InnerFunc;
}
const ans  = outerFunc(); // Matlab ouertFunc na ak innerFunc() return kiya
ans();

// CLOSURES:-
// Matlab Jab function kisi aur function se return hota ha tu apne sath jo uske local memory ke variables ha unko sath leke return hota ha Just like below :-

// printName() firstName aur lastname ko sath ma lekr return hua ha kuyn  ke esa pata tha ka isko in cheezon ki zaroorat paregi; Isliya answer ke pas printName ka sath firstname aur lastname ki value ha yani usko sab cheezain jholay ma milegi

// Yani jab ye printName ka function return hoga tab ye apne lexical environment(ye printName ka function kahan pr present ha printFullName ke andr aur printFullName ka pass firstname aur lastname ha) ka sath return hoga 

function printFullName(firstName, lastname){
    function printName(){
        console.log(firstName,lastname);
    }
    return printName;
}
const answer = printFullName("Hasan", "Ali"); // Matlab outerFunc na ak innerFunc() return kiya
answer();

