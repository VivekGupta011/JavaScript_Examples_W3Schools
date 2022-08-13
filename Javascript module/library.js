export let message='ES6 Modules';
export function user(){
    console.log("Hello Everyone");
 }
 console.log(user());

 
export function greetPerson(name) {
    return `Hello ${name}`;
  }
  console.log(greetPerson("vivek"));

  // variable declaraion
  export let name="vivek";
  console.log(name); 


  export default function App(){
    console.log("this is default module..");
  }
  