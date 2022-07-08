// let is 'block scope' variable
// var is 'function scope' variable


let num=5;  //this will never gonna error like this now they are behaving like 'function-scope'
{
    let num1=8;
    console.log(num1);
}
console.log(num);
// console.log(num1); this will going to genrate error bcz this variable based on 'block scoped'


// example

let num2="hello";

if(num2="hello"){
    let num1=" world";
    console.log(`${num2} ${num1}`);
}else{
    console.log("Error");
    
}
// console.log(num1);