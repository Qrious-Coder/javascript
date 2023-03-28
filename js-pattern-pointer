//Loop array from both ends
//Problems: In a sorted array returns the first pair of intergers whose sum is 0

//Sol 1: cons: O(n2)
function checkSumOne(arr){
    //1.sort array
    const sortArr = arr.sort((a,b) => a-b)
    //2.loop through the 1st
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<sortArr.length; j++){
            if( sortArr[i] + sortArr[j] === 0){
                return [ sortArr[i], sortArr[j] ]
            }
        }
    }
}

// console.log( checkSumOne( testArr ) )

//Sol 2:

function checkSum(arr){
    const sortArr = arr.sort( (a, b) => a-b)
    let left = 0
    let right = sortArr.length - 1
   
    for(let i = 0; i < sortArr.length; i++){
         let sum = sortArr[left] + sortArr[right] 
        
      if( sum === 0 ){
          return [ sortArr[left], sortArr[right] ]
      }else if( sum > 0 ){
          right = right - 1
      }else{
          left++ 
      }
        console.log(sum)
    }
        
    return 'nothing'
}

const testArr = [-5, 8, 8, 0, 2, 3, 5]

console.log( checkSum( testArr ) )
