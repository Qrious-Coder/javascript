//Problem: Wirte a func called maxSubArr([]: interger[], n: number)
//Calculate the max sum of n consecutive elements in the maxSubArr

//Slide window
function maxSubArr(arr, n) {
    let maxSum = 0
    let tempSum = 0
    if(arr.length < 0) return null;
    //1.loop and sum the first n of arr elements
    for( let i = 0; i<n; i++){
        maxSum += arr[i]
    }

    tempSum = maxSum 
    //2. Slide through the whole arr
    for(let j = n; j<arr.length; j++){
        tempSum = tempSum - arr[j-n] + arr[j]
        maxSum = Math.max(tempSum, maxSum)
    }
    //3. Remove the first and add the last
    return maxSum 
}

maxSubArr([1,3,5,2,8,1,9], 4)
