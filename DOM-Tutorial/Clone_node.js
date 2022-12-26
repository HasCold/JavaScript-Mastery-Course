// clone node 

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "New Todo";
const li2 = li.cloneNode(true); // true ka matlab "deep cloning" hogi yani jo li elemnt ka child ha wo bhi sath ma clone hoga 
ul.append(li); // append -->> last ma;
ul.prepend(li2); // prepend -->> starting ma ; AK waqt ma do apply krne ha tu deep cloning krni hogi
