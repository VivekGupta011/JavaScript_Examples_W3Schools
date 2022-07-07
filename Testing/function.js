// let student_data=
//     {
//         firstname:"vivek",
//         lastname:"gupta",
//         id:5467345,
//         fullname:function(){
//             console.log(this);
//             console.log(`${this.firstname}  ${this.lastname}  ${this.id}`);
//         }
//     };

// console.log(student_data.fullname());

// automatically our function takes input
function student_data1(firstName, lastName, student_id) {
  let student = {
    firstNamee: firstName,
    lastNamee: lastName,
    student_iid: student_id,
    fullname: function () {
      console.log(this);
      console.log(`${this.firstNamee}  ${this.lastNamee}  ${this.student_iid}`);
    },
  };

  return student;
}

let fulldata = student_data1("vivek", "gupta", 1234);
console.log(fulldata);
