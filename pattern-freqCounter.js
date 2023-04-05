//Problem: check if 2 numbers having the same freq of digits

function sameFreq(input1, input2){
    //#0: check input
    if( typeof input1 !== 'number' || typeof input2 !== 'number'){
        return 'input is not number'
    }

    if( input1.length !== input2.length ){
        return false
    }

    const inputArr1 = Array.from(String(input1), Number)
    const inputArr2 = Array.from(String(input2), Number)

    let obj1 = {}
    let obj2 = {}

    //#1: create a freq obj for both arrays
    for( let val of inputArr1 ){
        obj1[val] = ( obj1[val] || 0) + 1
    }

    for( let val of inputArr2 ){
        obj2[val] = ( obj2[val] || 0) + 1
    }
    //#3: turn both obj into string & compare
    if(JSON.stringify() === JSON.stringify()){
        return true
    }
    return false
}
sameFreq(182, 281)
sameFreq(3589578, 5879385)
