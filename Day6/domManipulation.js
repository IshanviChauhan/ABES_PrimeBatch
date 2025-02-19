// console.dir(document);
// console.dir(document.children);
// console.dir(document.children[0]);
// console.dir(document.children[0].children[1]);
// console.dir(document.children[0].children[1].children);

//H1 Color Change:
// console.dir(document.children[0].children[1].children[0].style.color = "red");

//Outer div bg = Blue and inner div bg = yellow:

// console.dir(document.children[0].children[1].children[1].style.backgroundColor = "blue");
// console.dir(document.children[0].children[1].children[1].children[0].style.backgroundColor = "yellow");
// console.dir(document.children[0].children[1].children[1].children[1].style.backgroundColor = "yellow");
// console.dir(document.children[0].children[1].children[1].children[2].style.backgroundColor = "yellow");
// console.dir(document.children[0].children[1].children[1].children[3].style.backgroundColor = "yellow");

//OR

// const outerDiv = document.querySelector("div");
// outerDiv.style.backgroundColor = "blue";

// outerDiv.children[0].style.backgroundColor = "yellow";
// outerDiv.children[1].style.backgroundColor = "yellow";
// outerDiv.children[2].style.backgroundColor = "yellow";
// outerDiv.children[3].style.backgroundColor = "yellow";

//OR

// const divChildrean = Array.from(outerDiv.children);
// divChildrean.forEach((child) => {
//     child.style.backgroundColor = "yellow";
// });

//OR

// const divChildrean = Array.from(document.querySelectorAll("div div"));
// divChildrean.forEach((child) => {
//     child.style.backgroundColor = "yellow";
// });

/*-------------------------------------------------------------------------*/

const mappings = {
    Invitation: "You are invited for event",
    Reminder: "You are reminded for task",
    Notice: "You have a notice from college",
    Message: "You have 7 messages",
};

// Array.from(outerDiv.children).forEach((child) => {
//     let key = child.children[0].innerText;
    // console.log(key);
//     child.children[1].innerText = mappings[key];
// });

/*-------------------------------------------------------------------------*/
//append, appendChild, remove, removeChild, prepend 

const newElement = document.createElement("div");
// newElement.innerText = "Hi from DOM";
const rootElement = document.querySelector("body");
rootElement.appendChild(newElement);

console.log(Object.entries(mappings));

Object.entries(mappings).forEach((elem) => {
    const newChildDiv = document.createElement("div");
    // newChildDiv.innerText = "Hello from DOM!";
    newChildDiv.style.border = "1px solid red";
    newChildDiv.innerHTML = `
        <h4 style="color:blue">${elem[0]}</h4>
        <p>${elem[1]}</p>
    `;
    newElement.appendChild(newChildDiv);
});