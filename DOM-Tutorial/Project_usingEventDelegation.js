const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']"); // Agr ham chahte ha ke jo ham type kare wo value print hogae
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e)=>{  // Event -->> Submit
    // If you don't want to refresh your page then 
    e.preventDefault();
    const newTodotext = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = '<span class="text">${newTodotext}</span><div class="todo-buttons"><button class="todo-btn done">Done</button><button class="todo-btn remove">Remove</button></div>';
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = "";
});
todoList.addEventListener("click", (e)=>{
    // checked if user clicked on done button
if (e.target.classList.contains("remove")){
    console.log("You want to remove something ?");
    const targetLI = e.target.parentNode.parentNode;
    targetLI.remove();
    console.log(targetLI);
}
if (e.target.classList.contains("done")){
    const liSpan = e.target.parentNode.previousElementSibling; // parent ke bhai tak paunche
    liSpan.style.textDecoration = "line-through";
    console.log(liSpan);
}

})
