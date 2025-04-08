//1.
function arrReverse(array){
    let reversed = array.map((item)=> item.split("").sort().join(""))
    let reversedArr= reversed.sort().reverse()
    return reversedArr

}
console.log(arrReverse( ['mary', 'shirley', 'bilha']))

//2.

 function values(array){
     let valueNumbers= [1,2,-3,4,5,0,6,-7]
      valueNumbers.forEach(num=>{
        if (num>0){
            console.log("positive")
        }   
         else if (num<0){
             console.log("negative")
            }
         else{
        return 'zero'
    }
     })
 }
values()
//3
 function employees(arrayOfDetails){
     return arrayOfDetails.sort((a,b)=> a.salary - b.salary)

 }
 console.log(employees([{name:"Shirley", id:234, salary: 150000},{name:"Bilha", id:406, salary:50000}]))

//4
 function multiply(array){
   return array.forEach(element => {console.log (element*2)
     })};
 (multiply([1,3,5,6,7,9]));
 //5

 function numberOperations(arrayOfNumbers){
    forEach((item,index) => 

    if(index>4) {item*8}
    else (numberOperations.length-2 ){item+5})
    


 }
