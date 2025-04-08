console.log("Manager Loading...");
const obj = require('./teamA.js');
const sum = require('./teamB.js');

console.log(`
  Revenue is ${obj.Revenue}$ 
  with a profit of ${obj.Profit}$.  
`);

const Revenue = sum(100,100);
console.log(Revenue);

console.log("Manager Loading Complete ✅");