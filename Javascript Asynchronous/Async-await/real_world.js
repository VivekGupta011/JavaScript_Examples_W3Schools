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
 function all_set(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("All set!..")
         },3000)
    })
 }
 

 async function authenticate(){
   try{
    await register();
    await Send_eamil();
    await login();
    await Retrive_data();
    await Show_data();
    await all_set();
   }catch(error){
    return `Caught an error:${error}`;

   }

 }

 authenticate();