let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("this is Promise test..");
    },2000);
});


let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("this is Promise2");
    },200);
});

//async function

async function asynfunction(){
    try{
        //wait until the promise resolves
    let result=await promise;
    let result1=await promise2;
    console.log(result);
    console.log(result1);
    console.log("this is async await");
    }
    catch(error){
        console.log("this is error");
    }
}

//calling the async funcion
asynfunction();