let arry=[1,2,34,5,14];

function double(x){
    return x*2;

}




function binary(x){
    return x.toString(2);
}


//we pass function as parameter

const outputt=arry.map((x) =>{
    return x*3;
});
const binary1=arry.map(binary);


const output= arry.map(double);
console.log(output);
console.log(outputt);
console.log(`this is binary formt => ${binary1}`);