# push unshift modify original array
# pop shift also modify original array
# Push method add item at the End of array's element


**when we add item using push its place item at end so its shift one by one item then placed at end**
Imagine
[4,5,6] push(2) => [2=> 4,5,6] 2 will shift 4 at 0 index
                   [4, 2=>5 ,6] 2 will again shift 5 at 1 index
                   [4,5, 2=>6] 2 will again shift 6 at 2 index 
                   [4,5,6 =>2] 2 reached to  end at 3 index


# Unshift method add at first index and do not disturb other elements
[4,5,6] unshift(2) => [=> 2,4,5,6]


### shift() and pop() use for remove element from array

**shift from first index and pop last index (arr.length - 1 )**

# shift for unshift because **unshift** **add** item first and **shift** **remove** at from 0 index

