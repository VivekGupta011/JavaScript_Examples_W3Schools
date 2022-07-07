function waitforsevensecond(){
    let ms=7000+new Date().getTime();
    while(new Date().getTime() <ms){
        console.log("this take about seven second..");
        console.log( "this is getTime()=>" + Date());
    }
}

setTimeout(function(){
    console.log("i am from timeout..");
},2000);

waitforsevensecond();






function num(){
   let ms=8000 + new Date().getTime();
   while(new Date<ms){

   }
}
num();