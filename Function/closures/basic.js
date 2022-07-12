

// outer function
function greet(person){
    
    
    //inner function
    function inner_greet(){
        console.log(` hello ${person}`);
    }

    // return function
    return inner_greet();

}

const g1= greet('vivek');

