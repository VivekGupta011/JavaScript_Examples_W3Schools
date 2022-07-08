

// calling function example
function greet(name,myfunction){
    console.log('Javascript developer..');
    // callback function
    // executed only after the greet() is executed


    myfunction(name);
}
// callback function 
function sayname(name){
    console.log(`Hello ${name}`);
}

// calling the function after 2 seconds
setTimeout(greet,2000,'Vivek ',sayname);