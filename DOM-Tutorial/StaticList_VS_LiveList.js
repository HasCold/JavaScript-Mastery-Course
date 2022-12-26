// static list vs live list

// querySelectorAll hamaein static list dega; querySelectorALL hamein NodeList dega
// getElementsBySomething hamaein live list dega; getElementsBySomething hamein "HTML collection" dega


const ul = document.querySelector(".todo-list "); // -->> NodeList(5) [ li, li, li, li, li ]
const listitem = ul.getElementsByTagName("li"); // is "ul"  ke andr kitne tag honga wo store krke hame dega; HTMLCollection { 0: li, 1: li, 2: li, 3: li, 4: li, 5: li, length: 6 } 
const Sixthli = document.createElement("li");
Sixthli.textContent = "item 6";
ul.append(Sixthli); // agr ma new items add kraunga tu wo yahan(console) pr reflect nahi honge
console.log(listitem); 

