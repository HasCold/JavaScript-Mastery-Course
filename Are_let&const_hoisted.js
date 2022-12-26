// Let and Const Hoisted ??
// A) The answer is YES, let and const be hoisted; ye global memory ma add hojate ha lkn uninitialized hote ha 

console.log(firstName); // let se varaiable ban tu jate ha lkn wo uninitialized rehte ha ; therefore it gives you a uncaught refernce error -->> Uninitialized Is ka matlab hame is line ko remove krna hoga ke initialized hogae
let firstName = "Hasan";
console.log(firstName);


