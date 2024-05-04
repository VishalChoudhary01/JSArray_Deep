const arr=[2,5,8,9,11,15]
const TookSlice=arr.slice(0,3) 
//assume [2,5,8] at 3rd index 9 
// but not picked because last index exclude
console.log(TookSlice) // [2,5,8]


const negativeSearch=arr.slice(2,-3)
//assume [8] because it start 2 index that is 8
//-3 index that is 9 thats will not include 
console.log(negativeSearch) //[ 8 ]
