// ************Function Execution Context

// jab ham   JS  ma function call krte ha tu kya hota;
// Complete Details In the Notebook

let foo = "foo";
console.log(foo);
function getFullName(firstName, lastname){
    console.log(arguments); // Arguments ko ham use nahi krte isko ES5 ke time pr use krte the lkn ye exist hote ha;
    let Myvar = "Var inside function";
    console.log(Myvar);
    const FullName = firstName + " " + lastname;
    return FullName;
}

// JS ma jab bhi ham ak  function call karenge uske liye ak naya execution context create hoga aur us execution context ko hum bolenge function execution context


const personName = getFullName("Hasan","Ali");
console.log(personName);

