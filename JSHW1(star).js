// 1* Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

let age2 = 18
let age3 = 60

const checkAge = function(age) { 
        if (age < age2) {
        console.log('You dont have access cause your age is ' + age + ' Its less then')
    }   else if (age >= age2 && age < age3) {
        console.log('Welcome!')
    }   else if (age > age3) {
        console.log('Keep calm and look Culture channel')
    }   else {
        console.log('Technical work')
    }
    }

checkAge(17)
checkAge(18)
checkAge(61)


// 2* Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
// И если он не Number - кидалась ошибка.

const checkAge1 = function(age) { 
    if (typeof age == 'number'){
        if (age < age2) {
        console.log('You dont have access cause your age is ' + age + ' Its less then')
    }   else if (age >= age2 && age < age3) {
        console.log('Welcome!')
    }   else if (age > age3) {
        console.log('Keep calm and look Culture channel')
    }   else {
        console.log('Technical work')
    }
    }   else {
        console.log('Not a Number')
    }
    }

checkAge1(17)
checkAge1(18)
checkAge1(61)
checkAge1('Hi')
checkAge1('Hello')


// 3** Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) 
// пропускалось, преобразовываясь в number.

const checkAge2 = function(age) { 
    if (typeof age === 'boolean') {
        console.log('Error')
    }
    else if (!isNaN(age)) {
        if (age < age2) {
            console.log('You dont have access cause your age is ' + age + ' Its less then')
        } else if (age >= age2 && age < age3) {
            console.log('Welcome!')
        } else if (age > age3) {
            console.log('Keep calm and look Culture channel')
        } else if (age == true) {
            console.log('Error')
        } else {
            console.log('Technical work')
        } 
    } else {
            console.log('Not a Number')
        }
    }
    
    checkAge2(17)
    checkAge2(18)
    checkAge2(61)
    checkAge2('2')
    checkAge2('0')
    checkAge2(true)
    checkAge2('Hello')


// 4*** Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке.

const checkAge3 = function(age) { 
    age = Number(age)
if (age) {
    if (age < age2) {
        alert('You dont have access cause your age is ' + age + ' Its less then')
    } else if (age >= age2 && age < age3) {
        alert('Welcome!')
    } else if (age > age3) {
        alert('Keep calm and look Culture channel')
    } else {
        alert('Technical work')
    }
} else {
        alert('Not a Number')
    }
    }

let a = prompt('Enter your age')

checkAge3(a)
