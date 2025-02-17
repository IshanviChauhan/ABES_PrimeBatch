//Function declaration
// function <function name>(<parameters>) {
     //code to be executed
//}

//Problem of this approach : 
// 1.function hoisting
// 2.function can be defined by repeating the function name
//Hoisting is JavaScript's default behavior of moving declarations to the top.
//This means that a function can be declared after it has been used.
//This is the reason why we can call a function before it is declared.
//But this is not the case with variables.
//Variables are not hoisted, they are only declared at the point where they are declared.
//So, if we try to use a variable before it is declared, it will throw an error.

//A function runs in 2 phases : memory allocation and execution
//memory allocation : memory is allocated for the function and its parameters
//execution : function is executed

// print("World","Call before declaration.");

// function print(a,b){
//     console.log("Hello ",a,b);
// }
// print("World"); //In this case a = "World" and b = undefined
// print("World","!");
// print("World","!","How are you?");

// const view1 = function greet(a){
//     console.log("Hello ",a);
// }
// view("Ishanvi");
//greet("Ishanvi"); //Error : greet is not defined

//Anonymous function : A function without a name
// const view2 = function (a){
//     console.log("Hello ",a);
// }
// view2("Ishanvi");

//Arrow function
//ES6+ Syntax
// const view3 = (a) => {
//     console.log("Hello ",a);
// }
// view3("Ishanvi");

/*-------------------------------------------------------------------------*/
//Q) Function to calculate the sum and return its mod 10 value using :
// Type 1 function
// function sumMod10(a,b){
//     return (a+b)%10;
// }
// console.log(sumMod10(25,30));

// Type 2 function
// const sumMod10 = function sumMod10(a,b){
//     return (a+b)%10;
// }
// console.log(sumMod10(25,30));

// Type 3 function
// const sumMod10 = function (a,b){
//     return (a+b)%10;
// }
// console.log(sumMod10(25,30));

// Type 3 function
// const sumMod10 = (a,b) => {
//     return (a+b)%10;
// }
//OR
// const sumMod10 = (a,b) => (a+b)%10;
// console.log(sumMod10(25,30));

/*-------------------------------------------------------------------------*/
//Q) Make a function sum and inside that function make a function PrintText and call it inside sum
// const sumMod10 = (a,b) => {
//     const PrintText = (name) => {
//         console.log("Hello", name);
//     }
//     PrintText("Ishanvi");
//     return (a+b)%10;
// }
// console.log(sumMod10(25,30));
// console.log(PrintText("Ishanvi")); //Error : PrintText is not defined
