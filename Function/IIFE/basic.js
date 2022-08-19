// An IIFE(immediately invoked function Expression)=>is a javascript function that run as soon as it is defined
// syntax here
// 1st way
(function(){
    //logic here
})();


// 2nd way
const funct=function(){
    console.log("this is IIFE FUNCTION");
}();

// 3rd way
!function(){
    console.log("this is IIFE Function")
}();

// Note:in IIFE  function contain two close parentheses right then 1st of mean that (){} containing logic part of our code and second () use for calling our function