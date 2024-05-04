const name=["vishal","rajesh","rahul","monal"]
const entriesValueIndex=name.entries();
console.log(entriesValueIndex) // Object [Array Iterator] {}

for(const [index,nameValue,] of entriesValueIndex){
    console.log(`Here is Index ${index} => ${nameValue}`)

}