

let Finance=[
    {
        user:"vivek",
        budget:546
    },
    {
        user:"vivek1",
        budget:1546
    },
    {
        user:"vivek2",
        budget:5146
    }
];


let total= Finance.reduce((acc,finance)=>{

    acc=acc+finance.budget;
    return acc;

},0);


console.log(total);






// let total=0;
 
// Finance.forEach((finance)=>{
//    console.log(finance.user);
//    console.log(finance.budget);

//    total+=finance.budget;
// })
// console.log(total);