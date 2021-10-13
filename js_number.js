//В js есть только один тип данных, связанных с числами и называется он Nubmer
//Каждое число имеет плавающую точку, например: 5 = 5.0

const NumberInfinity = Infinity; //бесконечное число со знаком +
// console.log(NumberInfinity);

// !конвертация в число

let str = "24";
let bin = '110';
// console.log(+str); // Number = +
// console.log(Number(str)); // говорим что присваем тип данных Number

// console.log(Number.parseInt(bin,2)); // Говорим что теперь этот объект Number с методом перевода в десятичную запись


// !Безопасные числа
// Узнать пределы безопасных чисел можнно с помощью методов MAX_SAFE_INTEGER(MIN_SAFE_INTEGER)

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

//Чтобы проверить безопасное число или нет есть метод isSafeInteger
let safe = 1;
let nosafe = 1000000000000000000000000;

// console.log(Number.isSafeInteger(safe));
// console.log(Number.isSafeInteger(nosafe));

//Проверка на целое число проводиться с помощью метода isInteger


//!Изменение количества знаков после запятой

// Number.(toFixed),(toPrecision),(tuExponential),

let a = 5.76321313671;
let b = 0.993;

// console.log(a.toFixed(2));
// console.log(b.toFixed(1));

 a = "5.76321321321";
// console.log(Number(a).toPrecision(1))

// !Преобразование в другую систему счисления
// Очень просто из 10 в любую другую с помощью метода toString(Number)
// а наоборот с помощью parseInt(Number,2)

// !Не число = это число
// NaN - является объектом Number. NaN превращает в все, с чем имеет дело, в NaN
// console.log(5.0 * NaN);

// Проверка на NaN
// NaN при сравнении с самим собой всегда дает false
// console.log(NaN == NaN);
//Чтобы добиться проверки можно использовать методы Object.is(NaN,Nan)
// или isNaN

// !Способы округления и возведение в степень
// Тут мы сталкиваемся с библиотекой Math
// Округление: вниз - floor, вверх - ceil, по канонам - round
// console.log(Math.floor(5.1));
// console.log(Math.ceil(5.1));
// console.log(Math.round(5.1));

// Возведение в степень с помощью ** или Math.pow(Number, степень)


//! Генерация случайного числа
// Метод Math.random - генерирует от 0 до 1 (не включая)
// console.log(Math.floor(Math.random()*10))

//генерация чисел в диапозоне [x,y)
const getRandom = (min,max) => 
    Math.floor(Math.random()*(max-min+1)+min);
// console.log(getRandom(4,10));

