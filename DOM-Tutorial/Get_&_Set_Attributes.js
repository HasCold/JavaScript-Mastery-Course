// get and set attributes

const link = document.querySelector("a"); // li tag ka andr class ya id ko attribute bolenge isi tarah a tag ke andr href ko attribute bolenge
console.log(link.getAttribute("href").slice(0)); // agr hum simply a tag indicate karenge tu ye sirf first wale ko show karega

link.setAttribute("href", "https://codprog.com");  // Set Attribute Property;
console.log(link.getAttribute("href"));  

const input = document.querySelector(".form-todo input");
console.log(input.getAttribute("type"));


