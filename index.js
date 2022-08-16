// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
};

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
};

function destructivelyRemoveLastCat(name) {
    cats.pop("Garfield");
};

function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo");
};

function appendCat(name) {
    return cats.concat(name);
}

function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}

function removeLastCat(name) {
    return cats.slice(0, cats.length -1);
}

function removeFirstCat(name) {
    return cats.slice(1, cats.length);
}