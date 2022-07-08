function funct(width=1,height){

    //this default part came in es6 before that 
    height=height===undefined?1:height
    // 
    let area=height*width*height;
    return area;
}

let area=funct(2);

console.log(area);






// this is regular function
function expression(num1,num2){
    return num1+num2;

}

let result= expression(5,6);
console.log(result);


// same function using aerrow function

let result1= (num3,num4)=>num3*num4;
console.log(result1(4,5));