// querySelectorAll & getElements by Class Name;

// get multiple elements using getElements by class name;
// get multiple Elements items using querySelectorAll

const Navitems = document.getElementsByClassName("nav-items"); // iska matlab jis ka nav-item classes ha wo sari pass hogae gi; Gives the html collection
console.log(Navitems[2]);
console.log(typeof Navitems);
console.log(Array.isArray(Navitems)); // -->> false

const nav = document.querySelectorAll(".nav-items"); //-->> NodeList ;  Shows all the class name of nav-items
console.log(nav[0]);


