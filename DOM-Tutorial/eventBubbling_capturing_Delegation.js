// Event Bubbling / Event Propagation
// Event Capturing
// Event Delegation

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
// Event Capturing
child.addEventListener("click", ()=>{
    console.log("Capturing!!!!! Child");
}, true);
parent.addEventListener("click", ()=>{
    console.log("Capturing!!!!! Parent");
}, true);
grandparent.addEventListener("click", ()=>{
    console.log("Capturing!!!!! Grandparent");
}, true);
document.body.addEventListener("click", ()=>{
    console.log("Capturing!!!!! Document.body");
}, true);

// Non Capturing Event
child.addEventListener("click", ()=>{
    console.log("Bubble Child!!!");
})
parent.addEventListener("click", ()=>{
    console.log("Bubble Parent!!!");  // Event Bubbling -->> Yani kisi ak event ko call kiya tu uske sath uske parent function bhi call honge; 
})
grandparent.addEventListener("click", ()=>{
    console.log("Bubble GrandParent!!!");
})
document.body.addEventListener("click", ()=>{
    console.log("Bubble Document.body")
})





