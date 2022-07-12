


// closures in javascript 
function multipy1(x){
    function multiply2(y){
        let mult=x*y;
        return mult;
    }
    return multiply2;
}



const multipy3= multipy1(6);
console.log(multipy3(3));