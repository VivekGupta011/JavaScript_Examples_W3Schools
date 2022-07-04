

let Finance=[
    {
        user:'vivek',
        budget:200
    },
    {
        user:'vivek1',
        budget:2040
    },
    {
        user:'vivek2',
        budget:700
    }
];

let total=0;
Finance.forEach((finance)=>{
    total+=finance.budget;
});
console.log(total);