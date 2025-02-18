/*-------------------------------------------------------------------------*/
//Two separate functions
// const sum = (a,b) => {
//     const ans = a + b;
//     return ans;
// };

// const printPretty = (txt) => {
//     console.log("--------------");
//     console.log(txt);
//     console.log("--------------");
// };

// const res = sum(20, 30);
// printPretty(res);
/*-------------------------------------------------------------------------*/

// const sum = (a,b,c) => {
    //Higher order function: A function that takes another function as an argument or returns a function
//     const ans = a + b;
    //return ans;
//     c(ans);
// };

// const printPretty = (txt) => {
//     console.log("--------------");
//     console.log(txt);
//     console.log("--------------");
// };

// printPretty(sum(20,30));
//printPretty() is a callback function
//Callback function: A function that is passed as an argument to another function
/*-------------------------------------------------------------------------*/

//Day 4 Task : Student Grading

// const getMetaData = () => {
//     const name = prompt("Enter your name: ");
//     console.log("Hello " + name);
//     const numOfSub = parseInt(prompt("Please enter the number of subjects: "));//parseFloat(), Number()
//     return numOfSub;
// };
// const getSubjects = (num) => {
//     const record = {};
//     for(let i=0; i<num; i++){
//         const sub = prompt(`Enter subject ${i+1} name: `);
//         const marks = prompt(`Enter marks for ${sub}: `);
//         record[sub] = marks;
//     }
    // console.log(record);
//     return record;
// };

const record = {
    maths: 92,
    english: 82,
    science: 72,
    hindi: 62,
};

const getPercentage = (obj) => {
    const marks = Object.values(obj);
    let totalMarks = 0;
    let totalSubject = 0;

    //marks.forEach(()=>{});
    marks.forEach((a) => {
        console.log(a);
        totalMarks += a;
        totalSubject++;
    });
    console.log(`Total Marks: ${totalMarks} \nTotal Subjects: ${totalSubject} \nTotal Percentage: ${totalMarks/totalSubject}`);
    return totalMarks/totalSubject;
}

const getHighestScoringSubject = (obj) => {
    let highest = 0;
    let subject = "";
    const marks = Object.entries(obj);
    marks.forEach((elem) => {
        const subMarks = elem[0];
        const subName = elem[1];
        if(subName > highest){
            highest = subName;
            subject = subMarks;
        }
    });
    console.log(`Highest scoring subject: ${subject} with marks: ${highest}`);
};

// const num = getMetaData();
// const data = getSubjects(num);
// console.log(data);

const percentage = getPercentage(record);
const highest = getHighestScoringSubject(record);

const getGrade = (percentage) => {
    const grades = [
        [60, "B"],
        [70, "B+"],
        [80, "A"],
        [90, "A+"],
    ];
    let grade = "F";
    // grades.forEach((elem) => {
    //     if(percentage >= elem[0]){
    //         grade = elem[1];
    //     }
    // });

    //OR

    const idx = grades.findIndex((elem) => {
        if(elem[0] > percentage){
            return true;
        }
        return false;
    });
    if(idx == -1)grade = "A+";
    else if(idx > 0) grade = grades[idx-1][1];
    console.log(`Your grade is: ${grade}`);
}

getGrade(percentage);
// console.log(percentage)