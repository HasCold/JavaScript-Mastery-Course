
const sectionTodo = document.querySelector(".section-todo"); // -->> <section class="section-todo container">
console.log(sectionTodo);

console.log(sectionTodo.classList); // Gives the two classes below
// DOMTokenList [ "section-todo", "container" ]
// ​
// 0: "section-todo"
// ​
// 1: "container"
// ​
// length: 2
// ​
// value: "section-todo container"

// We have to give the class from JS below the method
// sectionTodo.classList.add("bg-dark");           


// If we want to remove any class
sectionTodo.classList.remove("container");
console.log(`After Removing the container class`, sectionTodo.classList);
// DOMTokenList [ "section-todo" ]
// 0: "section-todo"
// length: 1
// value: "section-todo"


// If you have to check any class contains
const ans =  sectionTodo.classList.contains("container"); // Gives the true / false
console.log(ans);


// toggle -->> for Example agr hamari bg-dark class add nahi ha tu wo add krdega wrna add ha tu remove krdega
sectionTodo.classList.toggle("bg-dark"); // Add the bg-dark class in the sectionTodo class
