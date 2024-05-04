const arr=[10,20,30]
console.log(arr.every((num)=>num<10));
//false because  0 index already and all element already more than 10

console.log(arr.every((num)=>num<50)) // assume it will true because every number less than 50
//true