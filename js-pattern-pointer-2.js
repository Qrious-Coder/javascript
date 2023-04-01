//Problem: Count the unique values
const testArr = [1,1,1,2]

function findUniqueOne(arr) {
    let obj = {}
    let result = []
    //loop and turn arr into objectobj
    for( let val of arr ){
        obj[val] = (obj[val] || 0) + 1 
    }
   
    return Object.keys(obj).length
}

//Problem: Pattern pointer
function findUnique(arr){
    let result = 0
    let i = 0
    //Sort Arr
    const sortArr = arr.sort((a,b) => a - b)
    //Loop through arr with j
    for(let j = 0; j<sortArr.length; j++){

        //Compare arr[i] with all arr[j]
        if(sortArr[i] !== sortArr[j]){
            i++
            sortArr[i] = sortArr[j]
        }
        console.log(`i: ${i}, j: ${j}, sortArr: ${sortArr} `)
    }
   
    return i+1
}

console.log( findUnique([1,1,1,2]) )
console.log( findUnique([1,2,3,4,4,4,7,7,7,12,12,13]) )
