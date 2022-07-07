
// this is manual method to add student data 

let student={
    firstname:"vivek",
    lastname:"gupta",
    student_id:89765,
    fullname:function(){
        console.log(this);
        console.log(this.firstname);
        console.log(this.lastname);
        console.log(this.student_id);
    }
}
console.log(student.firstname);
console.log(student.lastname);
console.log(student.fullname());


let student2={
    firstname:"vivek2",
    lastname:"Gupta1",
    student_id:9078,
    fullname:function(){
        console.log(this);
        console.log(this.firstname);
        console.log(this.student_id);
        console.log(this.lastname);
    }
}

console.log(student2.firstname);
console.log(student2.lastname);
console.log(student2.student_id);
console.log(student2.fullname());



// here constructor come in picture to pay their role
function createStudent(firstName,lastName){
    let student={
        firstName:firstName,
        lastName:lastName,
        fullname:function(){
            console.log(`${this.firstName} ${this.lastName}`);
        }
    }
    return student;
}
let student3=createStudent("vivek3","gupta");

let student4=createStudent("dev_vivek","dev_gupta");
console.log("This is student3 ",student3);
console.log("This is student4 ",student4);
console.log(student2);




// basically we have two type constructor in javascript

// first type 

function storedata(firstname,lastname,student_id){

    let studentt={
        
        firstname:firstname,
        lastname:lastname,
        student_id:student_id,
        fullname:function(){
            console.log(`Your fullname is=> ${this.firstname} ${this.lastname} and your Student-id is=> ${this.student_id}`);

        }

    }
    return studentt;
}

let student5=storedata("vivek","gupta",7676);
console.log(student5);


// second type
function storedataa(firstname,lastname,student_id){
    // automatically browser create this object like =>this={}  
    this.firstname=firstname,
    this.lastName=lastname,
    this.student_id=student_id,
    this.fullname=function(){
        console.log(`${firstname} ${lastname} and student-id is ${student_id}`);
    }
    //return storedataa;
}

let student6=new storedataa("vivekk","guptaa",9876);
console.log(student6);