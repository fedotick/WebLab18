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
