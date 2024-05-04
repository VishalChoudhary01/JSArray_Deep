const arr=[10,20,30,40,50,60,80]
// copywithin doest not change original array length
// copywithin(target,start,end)
// I want remove 10 and inplace with 20 30
const result=arr.copyWithin(0,1,4)
//at index 0 10 will remove and 20 at index 1 {startpoint} and 30 at index 2 {endpoint} 30 will not include
// console.log(result)
// console.log(result.length)
// console.log(arr)
// console.log(arr.length)

// copywithin without target
const arr2=[10,20,30,40,50,60,70]
const withoutEnd=arr2.copyWithin(0,2)
// assume 10 will replace [30,40,50,60,70]
// new arr=[30,40,50,60,70,20]
console.log(withoutEnd)


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