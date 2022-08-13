// using * we can access all variable,class and function
import App from "./library.js"
import * as vivek from "./library.js";
// import {greetPerson} from "./library.js"

console.log(vivek.greetPerson("sachin"));
console.log(vivek.message);
console.log(vivek.user());
console.log(App());

 