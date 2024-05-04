const arraynum=[[4,5],[2,8],[3,2]];
const sumItemEachMultiple2=arraynum.flatMap((eachNum)=>{
return [(eachNum[0]+eachNum[1])*2]  
})
console.log(sumItemEachMultiple2)