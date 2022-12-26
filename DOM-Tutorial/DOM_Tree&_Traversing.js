//  <!-- Detailed Information on the DOM tree is Notted in the Notebook; So please check -->

// Traversing
const RootNode = document.getRootNode();
// Ma document k jitne bhi child Node ha unko dekh skta hu uske liye hamare pas method ha below
console.log(RootNode.childNodes); // Tu isme document ka ak hi child ha wo ha "html" you can also see in the browser 
// kuyn ke NodeList ha joke Array like Object hota ha tu ma iski indexing krskta hu

// Html page ko "root Element" kehte ha; Child Node of Document
const HtmlElementNode = RootNode.childNodes[0];
// console.dir(HtmlElementNode);  // If you want object representation then put dir in JS
console.log(HtmlElementNode.childNodes);  //  NodeList(3) [ head, #text, body ]

const headElementNode = HtmlElementNode.childNodes[0];
const TextNode = HtmlElementNode.childNodes[1];
const bodyElementNode = HtmlElementNode.childNodes[2];
console.log(headElementNode);  // --->> <head>
console.log(headElementNode.parentNode);  // --->> <html>
console.log(headElementNode.childNodes); // Output Gives below
// 0: #text "\n        "​
// 1: <title>​
// 2: #text "\n        "​
// 3: <script src="DOM_Tree&_Traversing.js" defer="">​
// 4: #text "\n        "​
// 5: <!--  Detailed Information on …tebook; So please check  -->
// ​
// 6: #text "\n    "​


// Sibling Relation
console.log(headElementNode.nextSibling);  // -->> #text "\n"
console.log(headElementNode.nextSibling.nextSibling); // -->> <body>


// Ham dekh skte ha RootNode se start hua tha ma aur kahi bhi traversing krskta hu