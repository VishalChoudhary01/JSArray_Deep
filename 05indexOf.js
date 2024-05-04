const arr=["monal","keshav","rajesh","rahul","ritik"];
// console.log(arr.indexOf("rajesh")); 
// having open arguments its return index 2 because rajesh available on index 2 
// const indexNumberMonal=arr.indexOf("monal");
// console.log(indexNumberMonal)
console.log(arr.indexOf("keshav","rahul"))
// console.log(arr.indexOf("ritik",4))

const MyNumb=Array.of(7,8,9,10,[4,5],[[0],12]);
console.log(MyNumb);


const numlist=[1,2,3];

const newArray=Array.from(numlist,(item)=> item+2)
console.log(newArray)