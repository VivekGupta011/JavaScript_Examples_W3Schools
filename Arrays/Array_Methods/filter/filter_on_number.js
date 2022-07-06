let arry=[12,3,7,8,18,34,8,10];


function isodd(x){
     return x%2!==0;

}



function iseven(x){
    return x%2==0;
}


let total2=arry.filter((x) =>{ x>18;});   //this is shorthand of function in one line.
let total=arry.filter(isodd);
let total1=arry.filter(iseven);

let total3=arry.map((x)=>{ return x*10});
console.log(total1);
console.log(total);
// console.log(total2);
console.log(total3);


for(let i=0;i<arry.length;i++){

    if(arry[i] >10){
        console.log(`this ${arry[i]} number greater than 10`);

    }else{
        console.log(`this ${arry[i]} number lesser than 10`);
    }
    // console.log(`using for loop ${arry[i]}`);
}



