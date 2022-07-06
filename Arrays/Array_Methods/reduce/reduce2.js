let data = [12, 8, 16, 20, 6, 4, 10, 26];

function findsum() {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total = total + data[i];
  }
  return total;
}
console.log(`the total array number is ${findsum()}`);

// same example using 'Reduce method..'
const output=data.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0);

console.log(output);































// taking input from user
// const prompt=require('prompt-sync')();  

let data2=[1,2,3,4,5,6,7,8,9,10];
// let num=prompt('Enter a Number for Multiplication table:')

function multiply(num=4){
   
    for(let i=0;i<data2.length;i++){
        let numm=num*data2[i];
        console.log(`${num} * ${data2[i]}= ${numm}`);
    }


}

console.log(multiply());