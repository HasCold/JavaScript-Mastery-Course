// little practice with click events 

const ALLbtn = document.querySelectorAll(".my-button button");
console.log(ALLbtn.length);

ALLbtn.forEach(buttons => {
    buttons.addEventListener("click", (e)=>{
        // console.log(e.target);  // e --> event
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "red";

    })
});



