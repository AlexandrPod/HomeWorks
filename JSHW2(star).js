// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, 
// начиная со степени 1.

for (let i = 1; i <11; i++) {
    console.log(2 ** i)
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, 
// в которую будет возводиться число 2.

const pow = function(counter) {
    for (let i = 1; i <=counter; i++) {
        console.log(2 ** i)
    }
}
pow(10)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, 
// чтобы в первой строчке выводилось :), во второй :):) и так далее

let result = ''
let smile = ':)'
for(let i = 1; i<6; i++) {
    console.log(result += smile)
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода.

function smiles(str, numberOfRows) {
    for(let i = 1; i<=numberOfRows; i++) {
        console.log(str.repeat(i))
    }
}

smiles(':|', 11)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, 
// сколько в слове гласных, и сколько согласных букв.
// В консоли: Слово (word) состоит из  (число) гласных и (число) согласных букв.

function getWordStructure(word) {
    const vowels = 'aeiouy'.split('');
    const consonants = 'bcdfghjklmnpqrstvwxz'.split('');

    let vowelsCount = 0;
    let consonantsCount = 0;

    for(const char of word.toLowerCase()) {
        if(vowels.includes(char)) vowelsCount++
        else if(consonants.includes(char)) consonantsCount++
    }
    console.log(`В слове ${word} : ${vowelsCount} гласных и ${consonantsCount} согласных букв`)
}

getWordStructure('Hello World')
getWordStructure('Case')
getWordStructure('Check-list')
getWordStructure('case')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом

function isPalindrom(word) {
    word = word.toLowerCase()
    for(let i=0, j=word.length-1; i<word.length, j>=0; i++, j--) {
        if(word[i] !== word[j]) {
            return false
        }
    }
    return true
}

console.log(isPalindrom('abba'), isPalindrom('Abba'))