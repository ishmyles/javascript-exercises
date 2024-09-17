const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  if (+num === 0) return 0;
  if (+num === 1) return 1;
  return fibonacci(+num - 2) + fibonacci(+num - 1);
};

// Non recursive solution
// const fibonacci = function (num) {
//     if (num < 0) return "OOPS";
//     const arr = [];
//     for (let i = 0; i <= num; i++) {
//       if (i === 0) {
//         arr.push(i);
//       } else if (i === 1) {
//         arr.push(i);
//       } else {
//         arr.push(arr[i - 2] + arr[i - 1]);
//       }
//     }
//     console.log(arr);
//     return arr[num];
//   };

// Do not edit below this line
module.exports = fibonacci;
