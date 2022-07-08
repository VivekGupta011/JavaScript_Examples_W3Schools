const obj1={
    x:1,
    y:2,
    z:3
};
const obj2={
    x:12,
    y:23,
    z:34
};

const obj6={...obj1,...obj2};
console.log("this is obj6=>",obj6);
const obj3={
    x:15,
    y:26,
    z:37
};

const obj4={...obj1,...obj2,...obj3};
console.log("this is obj4=>",obj4);




const arr1=[2,4,5,54,54];
const arr2=[5,75,6565,575754,54];
const arr3=[...arr1,...arr2];
console.log("this is arr3=>",arr3)