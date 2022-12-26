// event object


const firstButton = document.querySelector("#one");
firstButton.addEventListener("click", function(event){  // callback function(object)
    console.log(event); 
     // this ki value wahi hogi jo firstbutton ki ha is liye function use krahae ha arraow function ke bajae kuyn ke arrow function hame window deta ha  
})

// jab bhi ma kisi bhi elemnet pe event listener ko add karunga
// JS engine -->> Code line by line execute krta ha
// jaise hamare pas chrome browser ha -->> uske pas JS engine ha + extra features ha 
// browser -->> JS engine + WebApi

// Jab browser ko pata chala ke user ne event perform kiya(button pr click kiya) jo  hum listen krrahe ha
// Tu browser(Basically browser ma extra feature aur webApi hoti ha wo kaam karegi) 2 kaam karega 
// 1. callback function JS engine ko dega ke execute kare
// 2. callback ke sath wo jo event hua ha uski information bhi dega
// Tu ye information hame ak object ki form ma milegi;  like above


function hello(a){   // a --->> is an object 
    console.log(a);
}
hello({firstkey: "value1" , secondary: "value2"});


const ALLbtn = document.querySelectorAll(".my-button button");
for (let button of ALLbtn) {
    button.addEventListener("click", function(e){
        console.log(e.currentTarget);// target yani is pr fire kiya  // this ki value wahi hogi jo button ki value hogi 
    })
}

