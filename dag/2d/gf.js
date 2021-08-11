console.log("hoistingas jau ivyko - dabar prasideda gf.js");
const f = require("./funkcijos.js");

function sumosKvadratas(a, b) {
    const s = f.suma(a, b);
    return s * s;
}

module.exports = {
    sumosKvadratas
};


console.log("gf module");
console.log(module);
