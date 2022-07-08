

function callback(sum_function,text,a,b){
    console.log(`Hello ${text}`);
    sum_function(a,b);
}


 
// this is callback function
function summ_function(a,b){
    let sum=a+b;
    console.log(`this is sum of ${a} + ${b}=${sum}`);
    
}


callback(summ_function,'vivek',7,27);