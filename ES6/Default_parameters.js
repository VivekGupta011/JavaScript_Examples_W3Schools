
let sum=()=> 54;
function area(a=1,b=5+sum()){
    return a+b;
}
console.log(area());


