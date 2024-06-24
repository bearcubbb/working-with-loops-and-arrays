let numbers = [];

for (let i = -10; i <= 10; i++) {
    numbers.push(i);
}

console.log(numbers);

for (number of numbers) {

    //фильтр, убираем отрицательные значения из массива 
    numbers = numbers.filter(number => number >= 0);

    //number = Math.pow(number, 2);
    //numbers = numbers.map(number => number ** 2);

    //number = number ** 2;

    //сортировка по убыванию
    //numbers.sort((a, b) => b - a);

}

//возведение каждого элемента массива в квадрат
numbers = numbers.map(number => number ** 2);

//сортировка по убыванию
for (number of numbers) {
    numbers.sort((a, b) => b - a);
}

console.log(numbers);