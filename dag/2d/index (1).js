console.log("hoistingas jau ivyko - dabar prasideda programa");
const f = require("./funkcijos.js");
console.log("importavom funkcionaluma is funkcijos.js", f);
const gf = require("./gf.js");
console.log("importavom funkcionaluma is gf.js", gf);

console.log("index module");
console.log(module);

console.log("hello world");
console.log(f.suma(1, 2));
console.log(gf.sumosKvadratas(1, 2));
console.log("pabaiga");