// console.log("Team A Loading...");
// const add = require("./teamB.js");

// const Profit = 100;
// const Expenses = 20;

// const Revenue = add(Profit, Expenses);

// module.exports = {
//     Revenue,
//     Profit,
//     Expenses,
// };

// console.log("Team A Loading Complete ✅");

// const ans1 = add();
// const ans2 = add(10,20,30);
// const ans3 = add(20,50);
// const ans4 = add(1,2,3,4,5,6);
// const ans5 = add(99);
// console.log(ans1, ans2, ans3, ans4, ans5);

(
    (module, exports, _dirname) => {
        console.log("Team A Loading...");
        const Revenue = 100;
        console.log(Revenue);

    }
)();