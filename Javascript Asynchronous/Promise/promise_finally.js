

let countValue=new Promise(function(resolve,reject){
    // could be resolved or rejected
    resolve("successfully retrieve data from server");

});

// add other block of code
countValue.finally(function greet(){
    console.log("This code is executed.");

}).then(function success(text){
    console.log(text);
}).catch(function errorValue(error){
            console.log(error);
});