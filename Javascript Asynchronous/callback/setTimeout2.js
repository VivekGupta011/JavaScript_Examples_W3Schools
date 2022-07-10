

function call_back(myfunction1,myfunction2,text,text2){
    console.log(`Hello ${text}`);
    myfunction1(text);
    myfunction2(text2);

}

// callback function 1st
function myfunction1(intro){
    console.log(`this is myfunction1 ${intro}`);
}

// callback function 2nd
function myfunction2(intro2){
    console.log(`this is myfunction2 ${intro2} `);
}



call_back(myfunction1,myfunction2,'vivek1','vivek2');

// setTimeout(call_back,3000,myfunction1,myfunction2,'Vivek1','Vivek2');