// Event Delegation

const grandparent = document.querySelector(".grandparent");
grandparent.addEventListener("click", (e)=>{
    // console.log("You Clicked on Something");
      // yani browser ko capturing event nahi milega aur wo bubbling event jo grandparent pr ha wo show hoga; yani apko child , parent , grandparent k liye alag alag event use krne ki zaroorat nahi ha Event Delegation(callback) hogaega; Agr ham sirf child pr click kare tu uska grandparent event show hogae ga;

    //   console.log(e);   // click { target: div.child.box, buttons: 0, clientX: 656, clientY: 196, layerX: 656, layerY: 196 }
    console.log(e.target.textContent);
})




