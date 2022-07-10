// this is callback

function register(){

   return new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Register end');
        resolve();
    },3000);


    });
}
function Send_eamil(){

   return new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Email verification');
        resolve();
    },1000);


    });  
}
function login(){

   return new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Login done');
        resolve();
    },1000);


    });
}
function Retrive_data(){

   return new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Retriving data from server');
        resolve();
    },7000);


    });
}
function Show_data(){

   return new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Show data from server');
        resolve("this is from Show_data => resolve function");
    },1000);


    });
}

register()
.then(Send_eamil)
.then(login)
.finally(()=>{
   setTimeout(()=>{
    console.log("Data Fetching from Server...")
   },4000);
})
.then(Retrive_data)
.then(Show_data)
.catch(()=>{
    console.log("this is error occured");
}); 