// the type of conversion that you do manually is known as explicit type conversion
//  explicit type of conversion done by the built-in methods



// to convert numeric strings and boolean values to number you can use Number()

let result;
// string to number
result='2323';
console.log(typeof result);
result =Number('1234');
console.log(typeof result);

// if a string an invalid number the result will be NaN
result=Number(null);
console.log(result);
result=Number('');
console.log(result);


// we can also genrate number using parseInt(),parseFloat(),Math.floor() and +
result=+'44.44';
console.log(typeof result);