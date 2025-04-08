// import React, { useState } from "react";

// let count = 0;
console.log("Team B Loading...");

const sum = (...res) => {
    // count++;
    // console.log("Count: ",count);

    const ans = res.reduce((acc, curr) => {
        return acc + curr
    }, 0);
    return ans;
}

module.exports = sum;

console.log("Team B Loading Complete ✅");

// const TeamB = () => {
//   const [count, setCount] = useState(0);

//   function increment() {
//     // setCount(count + 1);
//     setCount((prevCount) => prevCount + 1);
//     setCount((prevCount) => prevCount + 4);
//   }

//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Click</button>
//     </>
//   );
// };

// export default TeamB;
