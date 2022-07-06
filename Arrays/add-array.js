let data = [12, 8, 16, 20, 6, 4, 10, 26];

function findsum() {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total = total + data[i];
  }
  return total;
}

// using forEach iteration loop
let total1 = 0;
data.forEach((numb) => {
  total1 = total1 + numb;
  //this part of code give sum of all array element
//   console.log(numb);
});

console.log(`the total array number is ${findsum(data)}`);
console.log(`the total1 array number  is ${total1}`);
