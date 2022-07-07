const users=[
    {firstname:'vivek',lastname:'gupta',age:25},
    {firstname:'vivek1',lastname:'gupta1',age:25},
    {firstname:'vivek2',lastname:'gupta2',age:25}
];

// list of full name 
 
const output=users.map((x)=>{return x.firstname + " " + x.lastname});
console.log(output);
