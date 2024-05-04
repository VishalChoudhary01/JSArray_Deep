const name=["Vishal","Harsh","Rahul","Monal","Himanshu"];
name.sort();
console.log(name);//[ 'Harsh', 'Himanshu', 'Monal', 'Rahul', 'Vishal' ]

const numbers=[10,2,200,25,14,11,21]
numbers.sort();
console.log(numbers) // [10, 11, 14, 2,200, 21, 25]
//they are converted in string in UTF16

numbers.sort((a,b)=>a-b)
console.log(numbers)
console.clear();

