Employ=[
    worker={
        payment:30,
        id:234
    },
    worker1={
        payment:30,
        id:234
    },
    worker2={
        payment:30,
        id:234
    }
];
for(let emply of Employ){
    emply.payment=emply.payment-10;


}
console.log(Employ);