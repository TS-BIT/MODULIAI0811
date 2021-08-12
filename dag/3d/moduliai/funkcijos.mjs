// export default function calc(op, a, b) {
function calc(op, a, b) {
    if (op === "sum") {
        return suma(a, b);
    } else if (op === "sub") {
        return atimtis(a, b);
    }
    throw new Error("Unknown operation");
}

export const skaicius = 15;
export let sk = 10;

export function suma(a, b) {
    sk++;
    return a + b;
}

function atimtis(a, b) {
    sk++;
    return a - b;
}

export {
    calc as default,
    atimtis as minus
};

/*
{
    suma: suma
    minus: atimtis
}

*/