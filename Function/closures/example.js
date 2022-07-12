// javascript closure example

// outer function
function outer_func() {
  // variable declaration
  let name = "vivek";
  function display_name() {
    //accessing the outer function variable
    console.log(`hello ${name}`);
  }
  return display_name;
}

let g1= outer_func();
console.log(g1); //returns the function defination
console.log(g1()); //return value

