console.log("hoistingas jau ivyko - dabar prasideda funkcijos.js");

let tasPats = "tas pats funkcijos.js";

function suma(a, b) {
    console.log(tasPats);
    return a + b;
}

function atimtis(a, b) {
    return a - b;
}

module.exports = {
    suma,
    minus: atimtis
};

console.log("funkcijos module");
console.log(module);
