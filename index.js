//1.
//function arrReverse(){
    //const days=("Monday","Tuesady","Wednesday")
    //let reversed=days.sort((a,b)=>(a-b))
    //return reversed

//}
//console.log(arrReverse())

//2.

function values(){
    let valueNumbers= (1,2,3,4,5,6)
    return valueNumbers.map(num=>{
        if (num>0)
            return 'positive'
        else if (num<0)
            return 'negative'
        else
        return 'zero'
    })
}
//3
values()

function employees(){
    let employeesDetail=("Shirley", "Id", "Salary")
    return employeesDetail.sort((a,b)=> (a-b))
}

//4
function multiply(){
    const items=(1,3,5,6,7,9)
    let d= items.array.forEach(element => {console.log (element*2)
        
    });
}

//5
function calculation(){
    const arrNumbers=(5,6,3,6,9)
    let v= arrNumbers.forEach(element=> element.slice(0,4)
        
    )
}