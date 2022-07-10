

function callback(myfunction1,name,Father_name,Surname){
    console.log(`Hello ${name}!`);
    myfunction1(name,Father_name,Surname);
}

// callback function
function myfunction2(name,Father_name,Surname){
    console.log(`Your full name is ${name} ${Father_name} ${Surname}`);
}
callback(myfunction2,'Vivek','Hiralal','Gupta');