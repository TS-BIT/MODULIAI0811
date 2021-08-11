console.log("hoistingas jau ivyko - dabar prasideda programa");
const f = require("./funkcijos.js");
console.log("importavom funkcionaluma is funkcijos.js", f);

console.log("index module");
console.log(module);

console.log("hello world");
console.log(f.suma(1, 2));
console.log("pabaiga");
