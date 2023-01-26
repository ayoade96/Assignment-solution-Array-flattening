// Assignment 1

let obj = {
    name:'joe',
    favColor:'pink',
    address:{
       continent:{
          africa:{
             conutry:'Nig',
          }
       }
    },
    hobbies:'reads'
 }

 //Solution

 let newObj = {};
 for(let key in obj){
    if (typeof obj[key] === 'object') {
       for (let subKey in obj [key]){
          newObj [subKey] = obj [key] [subKey]
       }
    }  else{
       newObj [key] = obj [key]
    }
 }
 console.log(newObj)

 // Assignments 2

 const tipCalculator = (amount) => {
    if (amount < 1 || amount == isNaN() || amount == Boolean ) {
          console.log('Warning: Not Possible')
          return

    }
   
   if (amount < 10000) {

    return 0.15 * amount

    } 
    if (amount > 10000 && amount < 15000) {

    return 0.1 * amount 

    } 

    return 0.06 * amount
    
}
tipCalculator(12000)
console.log(tipCalculator(12000))