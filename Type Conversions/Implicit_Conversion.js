// automatic type conversion 
// in certain situations ,javascript automatically converts one data type to another this known as implicit conversion

// implicit conversion to string
let result;
result='4'+4;
console.log(result);

result='3'+undefined;
console.log(result);
result ='5'+true;
console.log(result);



// Implicit Conversion to Number
// numeric string used with -,+,/,*
result='4'-'3';
console.log(result);

result='14'-4;
console.log(result);

// Non-numeric String Results to NaN
result='hello' -'world';
console.log(result);

result='vivek'-5;
console.log(result);
result='vivek'-5;
console.log(result);


// ImplicitBoolean Conversion to Number 
// if boolean is used true is 1 and false is 0
result='2'-true ;
console.log(result);

// null Conversion to Number
// null is o when used with number
// Note:Arithmatic operation with number ,boolean and null gives a NaN
