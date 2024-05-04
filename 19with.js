const arr=[10,42,30,40,50,60]
// with () help to change single item from original array and return a new modified item array

// const removed42Arr=arr.With(targetIndex,Value)

const removed42Arr=arr.with(1,20);
console.log(removed42Arr) // [ 10, 42, 30, 40, 50, 60 ]
console.log(arr) //[ 10, 20, 30, 40, 50, 60 ]