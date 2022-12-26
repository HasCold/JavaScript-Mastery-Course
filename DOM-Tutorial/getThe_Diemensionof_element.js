// How to get the diemension of elements

// height width

const sectiontodo = document.querySelector(".section-todo");
const info = sectiontodo.getBoundingClientRect();  // gives the all information of section-todo class 
console.log(info);

