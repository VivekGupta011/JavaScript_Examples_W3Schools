let obj={
    name:"vivek",
    lastname:'gupta',
    fullname:function(){
        console.log(`${this.name} ${this.lastname}`);
    }
}
let obj_name=obj.name;
let obj_name2=obj.lastname;
let obj_name3=obj.fullname();
console.log(`your fullname is: ${obj_name} ${obj_name2} using function :${obj_name3}`)

// this is normal process to access any object value 

// after ES6 Destructuring Assigment

let {name,lastname,fullname}=obj;
// name=obj.name;
// latname=obj.lastname;
// fullname=obj.fullname;
console.log(name,lastname,fullname);