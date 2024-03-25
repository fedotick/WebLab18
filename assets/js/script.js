// 1
document.getElementById('inputTask1').addEventListener('input', function() {
    const mySet1 = new Set();
    const numbers = this.value.split(' ');
    numbers.forEach(num => mySet1.add(num));

    document.getElementById('outputTask1').value = Array.from(mySet1);
});
