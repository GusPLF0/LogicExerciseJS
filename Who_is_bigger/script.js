// Script for comparing 2 numbers and log who is bigger


function whoIsBigger(...values){
    return `O maior é: ${Math.max(...values)}`
}


console.log(whoIsBigger(11,10, 13, 19, 22))