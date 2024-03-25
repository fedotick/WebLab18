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
}

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
