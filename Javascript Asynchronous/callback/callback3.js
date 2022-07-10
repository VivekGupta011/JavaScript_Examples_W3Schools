// A function is a block of code that performs acertain task when called..




function greet(name,callback){
    console.log(`Hello ${name}`);
    callback();
}


function callback(){
    console.log("I am callback function");
}

// passing a function as an argument

greet('vivek',callback);

// The 'callMe()' function is a callback function.
// in the above program there are two functions while calling the greet() function,two arguments(a string value and a function).


function callus(text){
    console.log("hello " + text +  " this is setTimeout!");
};

setTimeout(callus,3000);

