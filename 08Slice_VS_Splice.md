# Slice
## Its not modify original array its just take shallow copy
## Slice( startIndex , lastindex(exclude) )

```javascript
const arr=[2,5,8,9,11,15]
const TookSlice=arr.slice(0,3) 
//assume [2,5,8] at 3rd index 9 
// but not picked because last index exclude
console.log(TookSlice) // [2,5,8]
```
## Slice take Negative Number to search from last index
```javascript
const negativeSearch=arr.slice(2,-3)
//assume [8] because it start 2 index that is 8
//-3 index that is 9 thats will not include 
console.log(negativeSearch) //[ 8 ]
```
## Never Take start and end both negtive index  

# Splice
## we can take third argument as for add/replace item with deleted/cutoff
## Splice modify original array
## splice( **start_index** , **number_of_Items** ) 

```javascript
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
```
# Splice with delete item and replace with new one's
```javascript
const myColor=["red","blue","pink"]
const removedColor=myColor.splice(2,1,"green","gray","brown");
console.log(removedColor) // ["pink"] , Added
console.log("ALL New Color removed pink",myColor) //[ 'red', 'blue', 'green', 'gray', 'brown' ]
```
# Splice with new items not deleted anyone
## Item always added before index just like unshift()
```javascript
const myFriend=["Monal","Rahul","indrajeet"]
const addedNewFriend=myFriend.splice(2,0,"Himanshu","Harsh");

console.log(myFriend);//[ 'Monal', 'Rahul', 'Himanshu', 'Harsh', 'indrajeet' ]
```