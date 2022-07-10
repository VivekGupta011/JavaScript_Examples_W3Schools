// 1. register
// 2.Send Email
// 3.login
// 4.Retrive Data
// 5.show data


function register(callback){
    setTimeout(()=>{
        console.log("This is Register");
        callback();

    },1000);
}
function Send_mail(callback){
    setTimeout(() => {
        console.log("this is Email verification! ");
        callback();
        
    }, 5000);
}

function login(callback){
    setTimeout(()=>{
        console.log("this is Login");
        callback();
    },4000);
}

function Data(callback){
    setTimeout(()=>{
        console.log("this is data");
        callback();
    },3000);

}

function Show_data(){
    setTimeout(()=>{
        console.log("this is show data");
        
    },2000);
}


register(function numbee(){
    Send_mail(function(){
        login(function(){
            Data(function(){
                Show_data();
            });
        });
      });
});