// document.createElement() // Mostly all the Developers use this method
// append -- >> last ma add karega
// prepend -- >> start ma add karega
// remove

// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach Students");
// newTodoItem.textContent = "Teach Student";
// const todoList = document.querySelector(".todo-list");
// // newTodoItem.append(newTodoItemText);
// todoList.prepend(newTodoItem)
// console.log(newTodoItem);

// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1);


// before
// after

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Student";
const todoList = document.querySelector(".todo-list");
todoList.after(newTodoItem);

