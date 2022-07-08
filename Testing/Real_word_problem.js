setTimeout(function(){
    console.log("hello user!");
},3000);


setTimeout(()=>{
    console.log("hello vivek");
    login();
},2000);

function login(){

    setTimeout(function(){
        console.log("hello vivek this is regular function..");
    },2000);
}

 