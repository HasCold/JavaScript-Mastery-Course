// Add new HTML elements to page


// innerHTML to add html element

const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML);
// todoList.innerHTML = "<li>New Todo </li>";
// Iska pehla inner html aur new innerHTML ko add krdenge
todoList.innerHTML += "<li>New Todo </li>";
todoList.innerHTML += "<li>Teach Student </li>";  // But these methods not recommended to follow

// When you should use it , when you should not