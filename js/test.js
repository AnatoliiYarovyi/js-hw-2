// Предположим, у вас есть массив языков программирования из четырех элементов.
const languages = ['C', 'C++', 'Java', 'JavaScript'];

// Следующая операция заменяет второй элемент на новый.
languages.splice(1, 1, 'Python');

// В массиве языков теперь все еще четыре элемента,
// но второй элемент теперь «Python» вместо «C++».
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Вы можете заменить один элемент на несколько элементов,
// передав больше аргументов
languages.splice(2, 1, 'C#', 'Swift', 'Go');

console.log(languages);
// ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
