let radius=[4,6,3,5,7,9,3];

function area(radius){
    return Math.PI*radius*radius;
}


function cicumference(radius){
    return 2*radius;
}

  
const calculate=function(radius,logic){
  const output=[];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
    
  }
  return output;
}


console.log(calculate(radius,cicumference));
console.log(calculate(radius,area));