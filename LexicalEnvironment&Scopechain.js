// lexical environment , Scope chain
// You can see the Details in Notebook 

const lastname = "Ali";

const printName = function(){
    const firstName = "Hasan";
    function myFunc(){   
        console.log(firstName);
        console.log(lastname);
    }
    myFunc();
}
printName();

