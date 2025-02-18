const arr = [10, 20, 30];

//Using forEach
// const newArr = [];
// arr.forEach((a) => {
//     console.log(a);
//     newArr.push(a*2);
// });

//OR

//Using map
// const newArr = arr.map((a) => {
//     return a*2;
// });

// console.log(newArr);

//Reduce : It is used to reduce the array to a single value
//It takes a callback function as an argument
//The callback function takes 4 arguments : accumulator, element, index, array
//The callback function should return the accumulator
//reduce is like a universal funtion which can be used to implement forEach, map, filter, some, every etc.

//With default value
// arr.reduce((acc, elem, idx, c) => {
//     console.log(acc, elem, idx, c);
//     return acc;
// },0);

//Without default value
// arr.reduce((acc, elem, idx, c) => {
//     console.log(acc, elem, idx, c);
//     return acc;
// });

//Use cases : 1 : sum
// const ans = arr.reduce((acc, elem) => {
//     return acc + elem;
// },0); 
// console.log(ans);
//Without default value it will take the first element as the default value 
// of accumulator and start from the second element of the array and output will be same.


//Use cases : 2 : mul
// const ans = arr.reduce((acc, elem) => {
//     return acc * elem;
// },1);
// console.log(ans);

//Use reduce as forEach
const newArray = arr.reduce((acc,elem) => {
    acc.push(elem*2);
    return acc;
},[]);
console.log(newArray);