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
