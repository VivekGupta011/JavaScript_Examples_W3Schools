function funct(width=1,height){

    //this default part came in es6 before that 
    height=height===undefined?1:height
    // 
    let area=height*width*height;
    return area;
}

let area=funct(2);

console.log(area);

