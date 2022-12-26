// Loop
// Array like Objects -->Means Indexing , Length Property 

// let Navitems = document.getElementsByTagName("a"); // iska matlab jis ka nav-item classes ha wo sari pass hogae gi; Gives the html collection
// console.log(Navitems.length);
// we can't use forEach loop method to iterate through HTML collection
// simple for loop
// for of loop
// forEach

// for (let i = 0; i < Navitems.length; i++) {
//     // console.log(Navitems[i]);
//     const navItem = Navitems[i];
//     navItem.style.backgroundColor = "white"
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// Change HTML Collection to array
// navItem = Array.from(Navitems);
// console.log(navItem);
// console.log(Array.isArray(navItem));

// forof
// for (const navitem of Navitems) {
//     navitem.style.backgroundColor = "purple";
//     navitem.style.color = "yellow";
// }

// Navitems.forEach((navItem) => {
//     navItem.style.backgroundColor = "purple";
//         navItem.style.color = "yellow";
// });

// const nav = document.querySelectorAll(".nav-items"); //-->> NodeList ;  Shows all the class name of nav-items
// console.log(nav[0]);

// NodeList

let navitems = document.querySelectorAll("a");
// simple for loop
// for of loop    All loops can be used
// forEach
console.log(navitems);
// for (let i = 0; i < navitems.length; i++) {
//     // console.log(Navitems[i]);
//     const navItem = navitems[i];
//     navItem.style.backgroundColor = "white"
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

navitems.forEach((navItem) => {
    navItem.style.backgroundColor = "purple";
        navItem.style.color = "yellow";
});

// Change the NodeList into Array
nav = Array.from(navitems);
console.log(nav);
console.log(Array.isArray(nav));
