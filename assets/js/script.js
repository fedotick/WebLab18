// 1
document.getElementById('inputTask1').addEventListener('input', function() {
    const mySet = new Set();
    const numbers = this.value.split(' ');
    numbers.forEach(num => mySet.add(num));

    document.getElementById('outputTask1').value = Array.from(mySet);
});

// 2
document.getElementById('inputTask2').addEventListener('input', function() {
    const mySet = new Set();
    const words = this.value.split(' ');;
    words.forEach(word => mySet.add(word));

    document.getElementById('outputTask2').value = Array.from(mySet);
});

// 3
const synonyms = {
    'word1': 'synonym1',
    'word2': 'synonym2',
    'word3': 'synonym3',
    'word4': 'synonym4',
    'word5': 'synonym5'
};

document.getElementById('inputTask3').addEventListener('input', function() {
    const word = this.value;
    
    let synonym;

    if(Object.keys(synonyms).includes(word)){
        synonym = synonyms[word];
    } else {
        synonym = '¯\\_(ツ)_/¯';
    }

    document.getElementById('outputTask3').value = synonym;
});

// 4
let city1 = {};

city1.name = 'ГородN';
city1.population = 1e6;

let city2 = {
    name: 'ГородМ',
    population: 1e6,
};

let getName = function() {
    return this.name;
};

city1.getName = getName;
city2.getName = getName;

let exportStr = function() {
    let str;

    for(variable in this) {
        if (typeof(this[variable]) != 'function') {
            str += `${variable}=${this[variable]}\n`;
        }
    }

    return str;
};

city1.exportStr = exportStr;
city2.exportStr = exportStr;

console.log(city1.getName());
console.log(city2.getName());

console.log(city1.exportStr());
console.log(city2.exportStr());
