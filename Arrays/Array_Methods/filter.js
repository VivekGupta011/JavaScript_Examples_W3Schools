let Student_data=[
    {
        Name:"vivek",
        Marks:65,
        Id:53454
    },
    {
        Name:"Akash",
        Marks:35,
        Id:53454
    },
    {
        Name:"Sachin",
        Marks:75,
        Id:5345454
    }
];

// to perform certain action on array we have to need filter method 

const failed= Student_data.filter((student)=>{
    if (student.Marks<45){
        return true;
    }else{
        return false;
    }
})

 
console.log(failed);
console.log(Student_data);