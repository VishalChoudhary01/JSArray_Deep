const arr=[1,5,7,11,22,33,55]
console.log(arr.reverse())
const arr2=[5,8,20,43,45,69]

//without modify original array
const shallowCpy=arr2.concat().reverse();
console.log(shallowCpy);
console.log(arr2)

//using spread

const arr3=[4,5,8,7,22,36,45];
const spreadOpt=[...arr3].reverse();
console.log(spreadOpt)
console.log(arr3)



