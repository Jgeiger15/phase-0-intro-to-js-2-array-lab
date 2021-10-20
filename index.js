// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat() {
    cats.push("Ralph");
}
  
function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    const newCats = cats.slice();
    newCats.push("Broom");
    return newCats;
}

function prependCat() {
    const newCats = cats.slice();
    newCats.unshift("Arnold");
    return newCats;
}
function removeLastCat () {
    const newCats = cats.slice(0, -1);
    return newCats;
}

function removeFirstCat () {
    const newCats = cats.slice(1);
    return newCats;
}