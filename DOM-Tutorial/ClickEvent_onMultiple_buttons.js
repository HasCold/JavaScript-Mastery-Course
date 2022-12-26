// I want to see the click Event on all the three buttons;

const ALLbtn =  document.querySelectorAll(".my-button");

// We can iterate the loop

//  By forof
// for(let button of ALLbtn){  // for of loop theeno button k liye chalega yani event all the three buttons pr chalega
//     button.addEventListener("click",function(){   // 90% developers used arrow function in the addEventListener
//         console.log("You Clicked ME!");
//         console.dir(this.textContent);
//     })
// }

// By for

// for(let i = 0 ; i < ALLbtn.length ; i++){
//     ALLbtn[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }

// By foreach

ALLbtn.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this);
    })
});
