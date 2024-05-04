/*
reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) 
=> number): number

*/


const arr=[1,2,3,4,5]
const initial=0;
const result=arr.reduce((prevVal,currentVal,currentIndex,array)=>(prevVal+currentVal),initial);
console.log(result)