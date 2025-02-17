// const arr = ["Delhi","Fruits",99]

//for(initialization; condition; increment/decrement){}
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for(let i in arr){
    //keys
    // console.log("in::",i);
// }

// for(let i of arr){
    //values : only works with iterable objects
//     console.log("of::",i);
// }

//while(){}

//do{} while()

//Task
username = prompt("Enter your name:");
n = prompt("Enter the number of subjects:")
const subject = [];
const percentage = [];
for(let i = 0; i < n; i++){
    sub = prompt("Enter the name of subject "+(i+1)+":");   
    subject.push(sub);
    marks = Number(prompt("Enter the marks of subject "+sub+" (out of 100):"));
    percentage.push((marks/n)*100);
}
let max = 0;
let index = 0;
for(let i = 0; i < percentage.length; i++){
    if(percentage[i] > max){
        max = percentage[i];
        index = i;
    }
}
console.log("Highest scoring subject :",subject[index]);
if(max >= 90){
    console.log("Grade : A+");
}
else if(max >= 80){
    console.log("Grade : A");
}
else if(max >= 70){
    console.log("Grade : B");
}
else if(max >= 60){
    console.log("Grade : C");
}
else if(max >= 50){
    console.log("Grade : D");
}
else{
    console.log("Grade : F");
}