

const arrvalue=['my','name','is','vivek'];
console.log(arrvalue);
console.log(...arrvalue);
// above code is equiavalent to console.log('my','name','is','vivek');

// the spread operator "..." is used to expand or spread an iterable




// using spread operator canbe copy Array

arr1=[1,23,4,45,656,6];
arr2=[...arr1,345,34,4535,35,4];
console.log(arr1);
console.log(arr2);

arr1.push(45);
arr1.unshift(1000);
console.log(arr1);





// we can also copy array using another array

let arr3=[...arr2];
console.log("this is arr3 using spread operator=>",arr3);

