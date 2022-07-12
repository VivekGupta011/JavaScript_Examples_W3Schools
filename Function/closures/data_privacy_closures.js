

// outer function

function sum(){
    let num=0;

    // inner function

    function increase_func(){
        

        // the value if a increased by 1
        return num=num+1;

    }
    return increase_func;

}

let result= sum();
console.log(result());
console.log(result());
console.log(result());
console.log(result());
let a=5;
console.log(a);



// generally closures are used for data privacy