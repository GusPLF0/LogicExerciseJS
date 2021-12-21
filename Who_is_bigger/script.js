// Script for comparing 2 numbers and log who is bigger


function whoIsBigger(num1, num2){
    if(num1>num2){
        return `O maior é: ${num1}`;
    }else if(num1<num2){
        return `O maior é: ${num2}`;
    }else{
        return `Os dois número são iguais`;
    }
}


console.log(whoIsBigger(3,4))