// console.dir(window);  //window object repreasents BOM (Browser Object Model)
// console.dir(document); //document object represents DOM (Document Object Model)
// console.log(document); 
//document is givrn by window. So, window.document -> document

//Write generic text in html
// document.write("Hello World");

/*-------------------------------------------------------------------------*/

//Finding element 
//1. document.getElementById("id-name") --> returns single element or null
const elem1 = document.getElementById("text-1");
console.dir(elem1);
console.log(elem1);
elem1.style.color = "purple";

//2. document.getElementsByClassName("class-name") --> iterable[] / returns array of elements [.....] (HTML Collections) or empty array []
const elem2 = document.getElementsByClassName("heading-2");
console.dir(elem2);
console.log(elem2);
elem2[0].style.color = "red";

//3. document.getElementsByTagName() --> iterable[] / returns array of elements [.....] (HTML Collections) or empty array []
const elem3 = document.getElementsByTagName("p");
console.dir(elem3);
console.log(elem3);
elem3[0].style.backgroundColor = "yellow";

//4. document.querySelector() --> returns single element or null
const elem4 = document.querySelector(".heading-1");
console.dir(elem4);
console.log(elem4);
elem4.style.textDecoration = "underline";

//5. document.querySelectorAll() --> returns array of elements

