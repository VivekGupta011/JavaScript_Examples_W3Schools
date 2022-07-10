
let countValue=new Promise(function(resolve,reject){
    resolve("promised resolved");
});

// Execute when promise is resolved successfully
countValue.then(function successfullValue(result){
    console.log(result);
}).then(function successfullValue1(){
    console.log("You can call multiple functions this way.");
})
.then(function successfullValue1(){
    console.log("You can call multiple functions this way.");
})




// then() method is called when the promise is resolved successfully...
// catch() method is used with the callback when the promise is rejected or if an error occurs
 