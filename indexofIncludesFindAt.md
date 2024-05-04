# lastIndexOf
## Just like indexOf return index number if item available not available so its return -1 
## but it search from last index number
# IndexOf return indexNumber of given item
**On Given Argument as Item =>indexNumber**
# Includes return boolean value of given item
**On Given Argument as Item => boolean**
# at return item of given index number
**On Given Argument as indexNumber=>item**
## at() search item from last end on given negative index number
### find return  first item on searches from index 0 and if its got on given condition 
### Its will not search till end index
### findLast return  last item on search from last index and if its got on given condition it will not search till index 0

# findIndex
## findIndex Just like Find but its return index number on certain condition 

 **On Given argument we provide one callback condition and its return index number based on condition**

# findLastIndex
## findLastIndex just like findIndex but its search from last index.

# Every
## it search every element on certain condition if condition match for every elements
## It return true otherwise false even a single element not match too
```javascript

const arr=["monal","keshav","rajesh","rahul","ritik"];
const PointStartIndex=arr.indexOf("rahul",1);
console.log(PointStartIndex); // 3


```

# Some
**some(callbackFn)**
**some(callbackFn, thisArg)**
## Just like every its also search element on certian condition
## if any one matched just its return true and if any one not found then false


