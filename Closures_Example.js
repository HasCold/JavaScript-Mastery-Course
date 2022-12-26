// CLOSURES:-
// Matlab Jab function kisi aur function se return hota ha tu apne sath jo uske local memory ke variables ha unko sath leke return hota ha Just like below :-

// printName() firstName aur lastname ko sath ma lekr return hua ha kuyn  ke esa pata tha ka isko in cheezon ki zaroorat paregi; Isliya answer ke pas printName ka sath firstname aur lastname ki value ha yani usko sab cheezain jholay ma milegi

// Yani jab ye printName ka function return hoga tab ye apne lexical environment(ye printName ka function kahan pr present ha printFullName ke andr aur printFullName ka pass firstname aur lastname ha) ka sath return hoga 

function hello(x){  // line 1 in global execution context(GEC)
    // console.log(arguments);
    const a = "varA";
    const b = "varB";
    return function(){ // Ye function apne surrounding ma jo variables(a,b,x) ha yani lexical environment ma unko sath ma lekr return hoga 
        console.log(a,b,x);
    }
}

const ans = hello("arg"); // line 2 in GEC
ans(); // line 3 in GEC


// Example:-

const number = (number) => {
    return (power) => {
        console.log(`The square of ${number} is ${number**power}`);
    }
}

const square = number(4);
const Final = square(2);

const cube = number(3);
const n = cube(3);



