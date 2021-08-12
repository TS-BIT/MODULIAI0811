"use strict";

// let zmogus = {
//     vardas: "Jonas",
//     pavarde: "Jonaits"
// };

// console.log(zmogus);

// // console.log(Object.getOwnPropertyDescriptors(zmogus));

// // zmogus.vardas = "Petras";
// // console.log(Object.getOwnPropertyDescriptors(zmogus));

// Object.defineProperty(zmogus, "amzius", {
//     enumerable: true,
//     configurable: false,
//     writable: true,
//     value: 20
// });

// console.log(zmogus);
// // Object.defineProperty(zmogus, "amzius", {
// //     writable: true
// // });
// zmogus.amzius++;
// console.log(zmogus.amzius);

// Object.defineProperty(zmogus, "pilnasVardas", {
//     enumerable: true,
//     configurable: false,
//     get: function() {
//         return this.vardas + " " + this.pavarde;
//     },
//     set: function(value) {
//         let names = value.split(" ");
//         this.vardas = names[0];
//         names.shift();
//         this.pavarde = names.join(" ");
//     }
// });

// console.log(zmogus.pilnasVardas);
// zmogus.pilnasVardas = "Petras Petraitis";
// console.log(zmogus);
// // console.log(Object.getOwnPropertyDescriptors(zmogus));

function Zmogus(vardas, pavarde) {
    this.vardas = vardas;
    this.pavarde = pavarde;
}
Object.defineProperty(Zmogus.prototype, "pilnasVardas", {
    enumerable: true,
    configurable: false,
    get: function() {
        return this.vardas + " " + this.pavarde;
    },
    set: function(value) {
        let names = value.split(" ");
        this.vardas = names[0];
        names.shift();
        this.pavarde = names.join(" ");
    }
});

let z1 = new Zmogus("Jonas", "Jonaitis");
let z2 = new Zmogus("Petras", "Petraitis");

console.log(z1);
console.log(z1.pilnasVardas);
console.log(z2);
console.log(z2.pilnasVardas);

class ZmogusC {
    constructor(vardas, pavarde) {
        this.vardas = vardas;
        this.pavarde = pavarde;
    }

    get pilnasVardas() {
        return this.vardas + " " + this.pavarde;
    }

    set pilnasVardas(value) {
        let names = value.split(" ");
        this.vardas = names[0];
        names.shift();
        this.pavarde = names.join(" ");
    }
}

let z3 = new ZmogusC("Jonas1", "Jonaitis");
let z4 = new ZmogusC("Petras1", "Petraitis");

console.log(z3);
console.log(z3.pilnasVardas);
console.log(z4);
console.log(z4.pilnasVardas);
