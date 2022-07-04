let Users=[
    {
        firstname:"vivek",
        lastname:"gupta"
    },
    {
        firstname:"vivek1",
        lastname:"gupta1"
    }
];

const finalUsers=Users.map((user)=>{
    return{
        fullname:`${user.firstname} ${user.lastname}`
    }
});

console.log(finalUsers);