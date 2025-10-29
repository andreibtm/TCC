// String
const vreme1 = "sunny"
const vreme2 = 'windy'
const vremeFinala = `Afara este ${vreme1}`;

console.log(`Afara este ${vreme1}`);
console.log("Afara este " + vreme1);
console.log("Afara este" + " " + vreme1);


// Numere
const temperature = -25.5;
console.log("11" + 11);

// Boolean
const isRainy = false;

// Undefined
const variabilaTest = undefined;
console.log(variabilaTest);

// Null
let variabilaTest2 = "test";
variabilaTest2 = null;

function foo(a) {
    console.log(a);
}

foo(5);
foo();
foo(null);

// Objects
const userGol = {};
const user = {
    name: "Ana",
    age: 22
}

console.log(user.name);
console.log(user.age);

user.address = "Calea Aradului";
console.log(user);

//delete user.age;
//console.log(user.age);

// Copying objects
const copieUser = user;
copieUser.name = "Bob";

console.log(copieUser);

// Good
const goodCopieUser = {...user}
console.log(goodCopieUser);
console.log(user);

const newUser = {
    name: "Bob",
    age: 23,
    address: {
        street: "Calea Aradului",
        streetNumber: 7
    }
}

console.log(newUser.address.street);


// Array
const legume = ["rosii", "castraveti"];

console.log(legume);




