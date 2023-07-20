// High Order Component Pattern in React
//Compounds Components
// Render Props

// High Order Function
const arr = [1, 2, 3, 4, 5];
const filterFun = (item) => item % 2 === 0;

const even = arr.filter(filterFun);
console.log(even);
