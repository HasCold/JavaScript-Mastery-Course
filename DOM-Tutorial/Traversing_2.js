// ********************** DOM Traversing ***********************************

const RootNode = document.getRootNode();
console.log(RootNode);  // -->> HTMLDocument 

const h1 = document.querySelector("h1");
console.log(h1.parentNode);  // -->>> <div class="container">
const body = h1.parentNode.parentNode; // Here it means you have to change the color of "body"   
body.style.color = "red";
body.style.backgroundColor = "grey"; 

// You can also select the body in this way
const Body = document.body;
console.log(Body);


const head = document.querySelector("head");
console.log(head.childNodes);  // -->> NodeList(7) [ #text, title, #text, script, #text
const title = head.querySelector("title");
console.log(title); // -->> <title>


const container = document.querySelector(".container");   // -- >> <div class="container">
// children property;
console.log(container.children);  // -- >> HTMLCollection { 0: h1, 1: p, length: 2 }  

