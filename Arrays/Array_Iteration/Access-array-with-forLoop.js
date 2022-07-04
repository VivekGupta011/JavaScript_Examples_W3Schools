let Employ=[
    worker={
       payment:920,
       id:3245,

   },
    worker1={
       payment:520,
       id:1245,

   },
    worker2={
       payment:620,
       id:8245,

   }

];

for(let i=0;i<Employ.length;i++){
   console.log(i);
   console.log(Employ[i]);

//    if you have to decrease payment then...
console.log(Employ[i].payment+=-10);
}




// same array we make using foreach Array iteration
Employ.forEach((emply)=>{
    emply.payment=emply.payment-10;
});
console.log(Employ);