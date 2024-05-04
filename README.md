# Array in Javascript
# sparse array eg: [ 1, , 22 , 30,  ,  ,41]
1. In javascript array is resizable.
2. We can hold multiple and mixed too data types like string number array objects function .
3. Array will just access by index value generally in JS index start with 0 till length ( **start with 1 not with 0**) .
```javascript
const N_Arr=new Array(8);
console.log(N_Arr) // Empty Array of size of 8
console.log(N_Arr.length) // 8 (N_Array Length)
```

4. In JS copy operation using built in method make **Shallow Copy** not a Deep Copy .
 ### Shallow copy 
 A shallow copy of an object is a copy whose properties share the **same references** 

 ### Deeper Reference Concept
 Every data type work on only two memory type heap and stack 
 stack for Primitive Datatype like string number String
(Primitive non primitive heap and stack)[https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/]

## when any data type get stack memory so we get copy of that variable so when we make changes in assign variable in stack .
## Its will change that copy variable not in original varibale

## But in heap Memory any data type assign like Array Objects 
## its will make changes in original variable too.

## Shallow Copy
```javascript
let name="Vishal";
console.log(name) // Vishal

let firstName_Copy=name;

// here we will noticed we are assign name variable into firstName_copy

// so we will get copy name value in firstName_Copy

console.log(name)// Vishal
console.log(firstName_Copy) // Vishal

// lets make changes in firstName_Copy 
// we are assume its will change in original too
firstName_Copy="Keshav"

console.log(name)// Vishal
console.log(firstName_Copy)// Keshav

```
## Deep Copy when we try to one variable to another variable.

## So when we create one object so as variable its stored in stack but value stored in heap.
## when we make copy of  first  object  variable  to another variable so just value assigned in another variable And we Know Object value stored in heap not in stack. 
##  when we make change in copied object its will effect original object variable  value too.

```javascript

const obj={
    Fname:"vishal",
    address:"Patna"
}
let userprofile=obj;
console.log("Original Obj =>",obj.address) //Patna
console.log("Copied Value in userProfile =>",userprofile.address) //Patna
console.log(obj)
console.log(userprofile)

obj.address="Delhi"

console.log("After Changes")
console.log("Original Obj =>",obj.address) // Delhi
console.log("Copied Value in userProfile=>",userprofile.address) // Delhi
console.log(obj)
console.log(userprofile)
/*
Original Obj => Patna
Copied Value in userProfile => Patna
{ Fname: 'vishal', address: 'Patna' }
{ Fname: 'vishal', address: 'Patna' }
After Changes
Original Obj => Delhi
Copied Value in userProfile=> Delhi
{ Fname: 'vishal', address: 'Delhi' }
{ Fname: 'vishal', address: 'Delhi' }

```
# 1. at()
## The at( ) method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

# at ( indexNumberAlso Take Negative) 
## at ( ) similar indexof.
# 2. concat()
 ## The concat() method of Array instances is used to merge two or more arrays. 
 ## This method does not change the existing arrays, but instead returns a new array.
 ## When we concat with sub array so get return as one array through concat method.

 ```javascript
 const arr2=[2,4,6]
const arr5=[5,6,7,8]
const allRes=arr2.concat(arr5);
console.log(allRes) // [ 2, 4, 6, 5,6, 7, 8]

const subArr=[[2,0,0]]

const threeSubarr=arr2.concat(arr5,subArr);
console.log(threeSubarr) //[ 2, 4, 6, 5, 6, 7, 8, [ 2, 0, 0 ] ]
 ```
# 3. copyWithin()
## Copywithin copied element at target position where have there argument ( target , start , end (not include) ).
## its modify original and return modify array.
## its doesnot effect on length.
## its just replace elements from target and after target number of items will be replace
## we can use negtive index for search index from end.
```javascript

const arr=["V","I","S","H","A","L"]
arr.copywithin(0,2)
//index 2 is S and index 0 is V
//from index 2 all items ["S","H","A","L"] 
// replace from 0 index 
// ["V"] => ["S","H","A","L"] remian ["A","L"]
// arr=["S","H","A","L","A","L"] 
```


```javascript

const arr=[10,20,30,40,50,60,80]
// copywithin doest not change original array length
// copywithin(target,start,end)
// I want remove 10 and inplace with 20 30
const result=arr.copyWithin(0,1,4)
//at index 0 10 will remove and 20 at index 1 {startpoint} and 30 at index 2 {endpoint} 30 will not include
console.log(result) //[20, 20, 30, 40,50, 60, 80]
console.log(result.length) //7
console.log(arr) // [20, 20, 30, 40,50, 60, 80]
console.log(arr.length) //7
```
# copywithin without end (target, start)

```javascript

const name=["v","I","S","H","A","L"]
name.copyWithin(0,1)
/* assume
original       Inplace Each element with original place
    V       =       I
    I       =       S
    S       =       H
    A       =       L

L will remain at orginal place and one L copy place before original L
["I","S","H","A","L","L"]
*/
console.log(name) 
//["I","S","H","A","L","L"]
                // cpy , org
```
# 4. entries()
## entries() return iterable array like object
## where we can get index and array value
## entries never takes any arguments

```javascript

const name=["vishal","rajesh","rahul","monal"]
const entriesValueIndex=name.entries();
console.log(entriesValueIndex) // Object [Array Iterator] {}

for(const [index,nameValue,] of entriesValueIndex){
    console.log(`Here is Index ${index} => ${nameValue}`)

}
```

# 5. every()
## every method search item of certian condiition 
## every method takes one callbackfun as argument and callback function  ( index , value , array) takes as parameter.
## It return true otherwise false even a single element not match too .

```javascript
const arr=[10,8,2,4,6]
const items=arr.every((value,index,arr)=>{
    console.log(value)//10
    console.log(index)//0
    console.log(arr) // [10,8,2,4,6]
})
```
```javascript
const arr=[10,8,2,4,6]
const items=arr.every((value,index,arr)=>{
   return value%2==0;

//    remember use return keyword 
})
console.log(items) //true 
```

# 6. fill()
## Fill will replace with new items and its modified original array and return modifed array too.
```javascript
const numbers=[5,6,8,42]
const returnNumber=numbers.fill(0);
console.log(numbers) //[0,0,0,0]
console.log(returnNumber) // [0,0,0,0]


```
# fill( ) with Specfic index

## fill( replaceItem , startIndex , LastIndex ( **not include** ))

```javascript
const arr=[1,2,8,8,10]
const newarr=arr.fill(0,2,4);
console.log(newarr) //[ 1, 2, 0, 0, 10 ]
```

# 7. filter()
# 8. find()
# 9. findIndex()
# 10. findLast()
# 11. findLastIndex()
# 12. flat()

## The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
## One trick for depth we give argument as **infinity** its will remove all depth sub array and return a new single concanicated array

# Its always hold elements in one array we cannot remove all array spread out all element from array

## Particular Depth
```javascript
const originalArr=[1,2,[3,4,5],[6,[7,8,9]],10]
const concatedInSingleArray=originalArr.flat(0); 
// assuming its will not effect
console.log(concatedInSingleArray) // [ 1, 2, [ 3, 4, 5 ], [ 6, [ 7, 8, 9 ] ], 10 ]
console.log(originalArr)//              [ 1, 2, [ 3, 4, 5 ], [ 6, [ 7, 8, 9 ] ], 10 ]
```

# array.flat ( **infinity** )
```javascript

const originalArr=[1,2,[3,4,5],[6,[7,8,9]],10]
const concatedInSingleArray=originalArr.flat(Infinity);
console.log(concatedInSingleArray) // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
```
# array.flat (1)

## Break first inner level 1 array and hold in outer most single array
```javascript
const originalArr=[1,2,[3,4,5],[6,[7,8,9]],10]
const concatedInSingleArray=originalArr.flat(1); 
// assuming its will break ouuter most first array
console.log(concatedInSingleArray) // [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ], 10 ]   
// its break inner first array and holding one outer most array
console.log(originalArr)//
```

# array.flat(2)

## Break two inner level 1 and 2 and hold in outer most single array. 
```javascript
const originalArr=[1,2,[3,4,5],[6,[7,8,9]],10]
const concatedInSingleArray=originalArr.flat(2); 
console.log(concatedInSingleArray) // [1, 2, 3, 4, 5,6, 7, 8, 9, 10]  
```
# 13. flatMap()
## flatmap is combination of map() and flat map do opertion using callback function and return items before returning flat will remove array and flated in one array method.
# Problem with map with multi array
```javascript
const arraynum=[[4,5],[2,8],[3,2]];
const sumItemEachMultiple2=arraynum.map((eachNum)=>{
return [(eachNum[0]+eachNum[1])*2]  
})
console.log(sumItemEachMultiple2) //[ [ 18 ], [ 20 ], [ 10 ] ]
```
# alternative way
```javascript
const arraynum=[[4,5],[2,8],[3,2]];
const sumItemEachMultiple2=arraynum.map((eachNum)=>{
return (eachNum[0]+eachNum[1])*2  
})
console.log(sumItemEachMultiple2) //[ 18, 20, 10 ]
```
# Using flatmap
```javascript
const arraynum=[[4,5],[2,8],[3,2]];
const sumItemEachMultiple2=arraynum.flatMap((index,eachNum,array)=>{
return [(eachNum[0]+eachNum[1])*2]  
})
console.log(sumItemEachMultiple2)//[ 18, 20, 10 ]
```

# 14. forEach()
# 15. includes()
includes(**string**, fromIndex?: number | undefined)
## we search string  and asking Is Index available for string is string available so its return true

Determines whether an array **includes a certain element**, returning *true or false*
# 16. indexOf()
## its return first item index number if we have multiple items in array

## In general indexOf return index number that is available in array if not available its will return -1

# indexOf(one argument)
```javascript
const arr=["monal","keshav","rajesh","rahul","ritik"];
const IndexNumbRajesh=arr.indexOf("rajesh");
console.log(indexNumbRajesh) // IndexNumbRajesh getting return value from indexOf 2 
```
# indexOf( one argument, indexNumber )
## if we give another argument as number its will search from number of that index
## if its found so its return index number otherwise -1


# 17. join()
## The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.
**join()**

**join(separator)**

# 18. keys()
# keys gives iterator array like object of indexes.
## keys only take one variable for key{ indexNum }.
# keys never take arguments

```javascript
const names = ["vishal", "raj", "keshav", "jay"];
const keyIterator = names.keys();
console.log(keyIterator); //Object [Array Iterator] {}
// IterableIterator<number>
// Returns an iterable of keys in the array
for (const indexnum of keyIterator) {
  console.log(indexnum);
  /*
    0
    1
    2
    3
    */
}

```
# 19. lastIndexOf()
# 20. map()
# 21. pop()
# 22. push()
# 23. reduce()
```javascript
/*
reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) 
=> number): number

*/


const arr=[1,2,3,4,5]
const initial=0;
const result=arr.reduce((prevVal,currentVal,currentIndex,array)=>(prevVal+currentVal),initial);
console.log(result)
```
# 24. reduceRight()
# 25. reverse()
## reverse() modify the orginal array 
```javascript
const arr=[8,10,22,33,45,86]
arr.reverse();
```
# Without Modify original array

```javascript
//without modify original array
const arr2=[5,8,20,43,45,69]
const shallowCpy=arr2.concat().reverse();
console.log(shallowCpy);
console.log(arr2)
```

# without Modify original array

```javascript
//using spread

const arr3=[4,5,8,7,22,36,45];
const spreadOpt=[...arr3].reverse();
console.log(spreadOpt)
console.log(arr3)
```
# 26. shift()
## Remove item from start and modify original array
## its return number that removed

```javascript
const arr=[10,8,2,4,6]
const removedStart=arr.shift();
console.log(arr) //[8,2,4,6]
console.log(removedStart) // [10]
```

# 27. slice()
## Its not modify original array its just take shallow copy
## Slice(startIndex,lastindex(exclude))
# 28. some()

**some(callbackFn)**

**some(callbackFn, thisArg)**
## Just like every its also search element on certian condition
## if any one matched just its return true and if any one not found then false
```javascript

const arr=[11,8,2,4,6]
const items=arr.some((value,index,arr)=> value%2===0
)
console.log(items)
```
# 29. sort()
## sort() modify orginal array and sort on baseb on UTF16 / Alphabetically
## In string we get best sort 
## In number sort will convert into string then sort alphabetically

```javascript
const name=["Vishal","Harsh","Rahul","Monal","Himanshu"];
name.sort();
console.log(name);//[ 'Harsh', 'Himanshu', 'Monal', 'Rahul', 'Vishal' ]

const numbers=[10,2,200,25,14,11,21]
numbers.sort();
console.log(numbers) // [10, 11, 14, 2,200, 21, 25]
//they are converted in string in UTF16

numbers.sort((a,b)=>a-b)
console.log(numbers)
```
# 30. splice()
# 31. toLocaleString()
## toLocaleString() method never take argument.
## toLocaleString return a new array in string from number array.
## toLocaleString never modify original array.

# 32. toReversed()
## Reverse() method modify original array from item last to first
## toReversed() method modify copy array from item last to first
## toReversed() never modify original array

```javascript
const arr=[10,20,30,40,50,60]
const reversedArray=arr.toReversed();
console.log(reversedArray)  // [ 60, 50, 40, 30, 20, 10 ]
console.log(arr)  // [ 10, 20, 30, 40, 50, 60 ]
```

# 33. toSorted()
##  sort() method modify original array 
## toSorted do not modify original array

```javascript
const num=[20,30,2,5,1,11,9]
const copySorted=num.toSorted( (a,b)=>a-b);
console.log(num)
console.log(copySorted)
```

# 34. toSpliced()
## splice cutt of array item from original array and modifed it
## toSpliced do not modify original array just make changes from copy array
```javascript
const num=[10,30,102,100,14,23,45,26]
const splicedCuttOff=num.toSpliced(2,2);
console.log(splicedCuttOff) //[ 10, 30, 14, 23, 45, 26 ]
console.log(num)
// [10, 30, 102, 100, 14, 23,  45,  26 ]
```
# 35. toString()
## toString remove from array and convert into string with comma seperation.
## toString never modify original array 
## toString return a string from array

```javascript
const item=[10,"20",30,"40","50","sixty"]
const stringArr=item.toString();
console.log(stringArr) // 10,20,30,40,50,sixty
console.log(item) // [ 10, '20', 30, '40', '50', 'sixty' ]
```
# 36. unshift()
## unshift() method add to item at first its modify original array and return its total length

```javascript
const numbr=[5,6,7]
const total=numbr.unshift(1,2,3,4)
console.log(numbr) //[1, 2, 3, 4,5, 6, 7]
console.log(total) // 7

```
# 37. values()
## Values create iterator and only iterate on one variable that hold all array items.
```javascript
const arr=[20,30,40,50];
const arrIterator=arr.values();
for(const arrayvalue of arrIterator ){
    console.log(arrayvalue)
}
```
# 38. with()
## with() do not modify original array.

## with() return new copy /modify array with a single element replace from array.

## with ( targetIndex , Value) .
```javascript
const arr=[10,42,30,40,50,60]
// with () help to change single item from original array and return a new modified item array

// const removed42Arr=arr.With(targetIndex,Value)

const removed42Arr=arr.with(1,20);
console.log(removed42Arr) // [ 10, 42, 30, 40, 50, 60 ]
console.log(arr) //[ 10, 20, 30, 40, 50, 60 ]
```