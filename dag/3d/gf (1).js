console.log("hoistingas jau ivyko - dabar prasideda gf.js");

let tasPats = "tas pats gf.js";


const f = require("./funkcijos.js");

function sumosKvadratas(a, b) {
    console.log(tasPats);
    const s = f.suma(a, b);
    return s * s;
}

module.exports = {
    sumosKvadratas,
    suma: f.suma
};


console.log("gf module");
console.log(module);
