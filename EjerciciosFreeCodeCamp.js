const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak", "404NotFound"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    "use strict";
    // change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // change code above this line
    return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);

const createPerson = (name, age, gender) => {
    // Only change code below this line
    return ({ name, age, gender })
};
// Only change code above this line
console.log(createPerson("Daniel", 26, "Male"))

// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
// Only change code above this line
bicycle.setGear(3);
console.log("\n" + bicycle.gear);

// Only change code below this line
class Vegetable {
    constructor(name) {
        this.name = name;
    }

}
// Only change code above this line

const banano = new Vegetable('banano')
console.log("\n" + banano.name); // Should display 'banano'

// Only change code below this line
class Thermostat {
    constructor(fahrenheit) {
        this._fahrenheit = fahrenheit;
    }

    get temperature() {
        return (5 / 9) * (this._fahrenheit - 32);
    }

    set temperature(celsius) {
        this._fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log("\n" + temp);