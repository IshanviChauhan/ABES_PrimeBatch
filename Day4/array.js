//Arrays
// const arr = []
// const arr = ["fruits","hello",7];

// console.log(arr);
// console.log(arr.length);

// const obj = {
//     1:"fruits",
//     2:"hello",
//     3:24,
//     length:3
// }

// console.log(obj);
// console.log(obj.length);

/*-------------------------------------------------------------------------*/
//Add in array
// arr.push("World");
// console.log(arr);
// console.log(arr.length);

/*-------------------------------------------------------------------------*/
//Access
// console.log(arr[2]);

/*-------------------------------------------------------------------------*/
//Update
// arr[3] = "Amazon";
// console.log(arr);

/*-------------------------------------------------------------------------*/
//Incorrect way : Add
//Adding and element at index > length will create empty elements (holes in array)
// arr[7] = "Google";
// console.log(arr);
//Output: [ 'fruits', 'hello', 7, 'World', <3 empty items>, 'Google' ]

//Incorrect way : Delete
// delete arr[1];
// console.log(arr);
//Output: [ 'fruits', <1 empty item>, 7, 'Amazon', 'World', <1 empty item>, 'Google' ]

