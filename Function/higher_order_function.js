let radius = [4, 6, 7, 8, 6, 9];

function triangleArea(radius) {
  let output = [];
  for (let index = 0; index < radius.length; index++) {
    output.push(Math.PI * radius[index] * radius[index]);
  }
  return output;
}

console.log(triangleArea(radius));


let cicumference=function(radius){
    let output=[];
    for (let index = 0; index < radius.length; index++) {
        output.push(2*Math.PI*radius[index]);
    }
    return output;
}
console.log(cicumference(radius));


// same thing using map 
// where x indicated each iteration element
function triangleArea1(x){
    let area=Math.floor(Math.PI*x*x);
    return area;

}
console.log(
    radius.map(triangleArea1)
)
