let testing=['vivek','gupta','vivek gupta'];
let [x,y,z,a=5]=testing;
console.log(x);
console.log(a);

// in similar way we can create for a object
let obj={
    name:"vivek",
    lastname:'gupta'
}

let {name,lastname,fullname='vivek Gupta'}=obj;
console.log(fullname);



// Assign Remaining elements to a single variable
let num=[1,3,5,6,7,8,9];
let [b,c,d,e,...arr]=num;
console.log(b);
console.log(...arr);

