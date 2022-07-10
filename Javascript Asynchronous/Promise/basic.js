// it is used to find out if the  asynchronous operation is successfully completed or not

// A promise may have one of three states:
// 1.Pending
// 2.Fulfilled
// 3.Rejected


// To create a Promise
// to create a promise object,we use the 'Promise()' constructor.

// The Promise() constructor takes function as an argument and those function also accept two functions 'resolve' and 'reject'.


// this is using Normal function
// let promise=new Promise(function(resolve,reject){

// });



// this is using Aerrow function
 let count=true;
let promise1=new Promise((resolve,reject)=>{
   if(count){
    resolve("There is a count value");
   } 
   else{
    reject("There is no coubt value");
   }

});
console.log(promise1);



let num=11;
let promise2=new Promise(function(resolve,reject){
    if(num>9){
        resolve("this number are greater than 9");
    }else{
        reject("this number are lesser than 8");
    }
});
console.log(promise2);




let promise3=new Promise((resolve,reject)=>{
    resolve("this is resolve example");
});
promise3.then(function success(result){
    console.log(result);
})

let promise4=new Promise((resolve,reject)=>{
    resolve("this is resolve");
})


promise4.then(function result(text){
    console.log(text);
})