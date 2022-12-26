function myfunc(){
    let counter = 0; 
    return function(){ // ye ham ko pata ha jab ye function return hoga tu ye apne sath is local memory ko lekr return hoga
    if (counter < 1) {
        console.log("Hi! You called me...")
        counter++;
    }
    else{
        console.log("Already called at once");
    }
}
}
const func1 = myfunc();
func1();
func1();
func1();
const func2 = myfunc();
func2();
func2();
func2();
func2();
func2();

