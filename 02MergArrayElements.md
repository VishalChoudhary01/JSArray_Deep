# Method 1 :(Push)
```javascript
const arrOne=[1,2,3,4];
const arrTwo=[8,8,8];

// Method 1
arrOne.push(arrTwo);
console.log(arrOne); // [ 1, 2, 3, 4, [ 8, 8, 8 ] ]

```
Problem we are getting array of array but we want just elements holding in one array

# Method 2 : (concat)

can we combine two array elements just like push ?
```javascript
arrOne.concat(arrTwo)
console.log(arrOne)

[ 1, 2, 3, 4, [ 8, 8, 8 ] ]
```
we are getting same output 
## concat method need variable to return output
# Concat never modify original array
```javascript
// final holding return value
    const final=arrOne.concat(arrTwo)
    console.log(final)

```
# Method 3: (spread Operator)
```javascript

const spreadedResult=[...arrOne,...arrTwo]

console.log(spreadedResult)
```
**Tooks both array Variable and spread each of them in one empty array [ ]**
