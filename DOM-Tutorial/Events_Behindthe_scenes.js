// *********************** Events Behind The Scenes ************************************
console.log("Script Start !!!");

const ALLbtn = document.querySelectorAll(".my-button button");
ALLbtn.forEach((button) => {
    button.addEventListener("click", (e)=>{
        let num = 0;
        for(let i = 0; i <= 1000000000 ; i++){
            num += i;
        }
        console.log(e.currentTarget.textContent, num);  
    })
});

let outerVar = 0;
for (let i = 0; i < 100000000; i++) {
    outerVar += i;    
}
console.log("Value of outerVariable is", outerVar);
console.log("Script End !!!");
