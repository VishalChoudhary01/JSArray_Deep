const arr=[10,20,30,40,55,36,60,70]
console.log(arr) // [10,20,30,40,55,36,60,70]
console.log(arr.splice()) // []
// will cut out all items if we not specified
const cuttOut=arr.splice(3,2)
// assume start index 3 that is 40
// number of items 2 so 40 55
// we will get [40 55]
console.log(cuttOut) //[ 40, 55 ]
console.log(arr) // [ 10, 20, 30, 36, 60, 70 ] 


const myColor=["red","blue","pink"]
const removedColor=myColor.splice(2,1,"green","gray","brown");
console.log(removedColor) // ["pink"] , Added
console.log("ALL New Color removed pink",myColor) //[ 'red', 'blue', 'green', 'gray', 'brown' ]

const myFriend=["Monal","Rahul","indrajeet"]
const addedNewFriend=myFriend.splice(3,0,"Himanshu","Harsh");
//assume item added after rahul because its index 1
console.log(myFriend);