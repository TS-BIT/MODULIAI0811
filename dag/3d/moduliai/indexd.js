console.log("hoistingas jau ivyko - dabar prasideda programa");

let tasPats = "tas pats index.js";

// NEVEIKIA
// const f = require("./funkcijos.mjs");
// console.log(f.default("sum", 1, 2));

// const f = require("./funkcijos.js");
// console.log("importavom funkcionaluma is funkcijos.js", f);
const gf = require("./gf.js");
console.log("importavom funkcionaluma is gf.js", gf);

console.log("index module");
console.log(module);

console.log("hello world");
console.log(tasPats);
console.log(gf.suma(1, 2));
console.log(gf.sumosKvadratas(1, 2));
console.log("pabaiga");
