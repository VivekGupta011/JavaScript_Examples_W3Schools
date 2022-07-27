//nested array element
const arrvalue=['one',['two','three']];

// nested destructuring assignment in arrys
let [a,[b,c]]=arrvalue;
console.log(c);

// similarly we have to apply in object
let object_numb={
    first:1,
    second:2,
    third:{
        fourth:4,
        fifth:5
    }
}

let {first:a1,second:b1,third:{fourth,fifth}}=object_numb;
console.log(fifth);
console.log(a1);
console.log(b1)