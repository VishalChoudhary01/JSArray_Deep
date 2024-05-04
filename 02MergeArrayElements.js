const arrOne=[1,2,3,4];
const arrTwo=[8,8,8];

// Method 1
// arrOne.push(arrTwo);
// console.log(arrOne); // [ 1, 2, 3, 4, [ 8, 8, 8 ] ]

// Method 2
// const final=arrOne.concat(arrTwo)
// console.log(final)


//Method 3

const spreadedResult=[...arrOne,...arrTwo]

// Tooks both array Variable and spread each of them in one empty array [ ]
console.log(spreadedResult)

