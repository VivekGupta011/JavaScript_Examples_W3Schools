let countValue=new Promise(function (resolve,reject){
    reject("Promise rejected");
});

// Executes when promise is resolved successfully
countValue.then(
    function successfullValue(result){
        console.log(result);
    }
)

// execute if there is an error
.catch(
    function errorValue(result){
        console.log(result);

    }
)