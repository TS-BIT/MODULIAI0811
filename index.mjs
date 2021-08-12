// import { suma, minus as subtraction, default as c } from "./funkcijos.mjs";

// let minus = -1;

// console.log(suma(1, 2));
// console.log(subtraction(1, 2));
// console.log(c("sub", 1, 2));


import * as f from "./funkcijos.mjs";
import * as gf from "./gf.js";

console.log(gf.sumosKvadratas(2, 3));
console.log(f.sk);
console.log(f.suma(1, 2));
console.log(f.minus(1, 2));
console.log(f.skaicius);
console.log(f.sk);
// f.sk = 20;
console.log(f);
console.log(Object.getOwnPropertyDescriptors(f));

// import c from "./funkcijos.mjs";

// console.log(c("sub", 1, 2));
// console.log(calc("sub", 1, 2));
