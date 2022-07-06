let ary=[
    {
        student:'vivek',
        marks:30
    },
    {
        student:'vivek1',
        marks:76
    },
    {
        student:'vivek2',
        marks:87
    },
    {
        student:'vivek3',
        marks:40
    }
];

let total=ary.filter((mark)=>{
    if (mark.marks >40){
        console.log(`${mark.student} you are pass with the number ${mark.marks}`);


    }
    else{
        console.log(`${mark.student} you are fail with this number ${mark.marks}`);
        
    }
})