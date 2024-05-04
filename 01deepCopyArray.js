const arrOrginal=["Vishal","Monal","Sunny"];
const copyArr=arrOrginal;
console.log("Original Arr::  ",arrOrginal[0]); //Vishal
console.log("Copied Arr :: ",copyArr[0]); //Vishal

copyArr[0]="Nihal"; // Changed copy arr at index 0 value 
console.log("After CHanges");

console.log("Original Arr :: ",arrOrginal[0]); //Nihal
console.log("Copied Arr :: ",copyArr[0]);//Nihal

