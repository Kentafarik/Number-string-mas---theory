//! Поиск длины строки
// свойство length 
let stroka = 'Евгений';
// console.log(stroka.length)

//! Поиск подстроки внутри строки
// Это можно сделать с помощью метода indexOf('подстрока');
// console.log(stroka.indexOf('гн'));
// метод slice(нач,конц) используется для извлечения
// console.log(stroka.slice(2))

//! Изменение регистра
// toLowerCase() и toUpperCase() говорит само за себя

//! Обновление частей строки
// Заменить одну подстрокой другой можно с помощью replase('изнч.строка','замена')
// console.log(stroka.replace('Ев',"я "));
// console.log(stroka)

//! Повторение строки происходит с помощью метода repeat(кол-во раз)

//! Объеденение массива строк в одну происходит с помощью
// метода join('разделительный знак')

// Если к массиву строк применить метод toString он вернет список строк

//!Разделение строки
//Метод split(' ') помогает разделить строку на массив элементов
// console.log("Женя я люблю тебя".split(' '));
//Или split('\n') разобьет многострочно строку

//! Удаление пробелов происходит по методу trim(), trimStart(), trimEnd()

//Если мне неважна позиция подстроки, а надо просто узнать существует ли она, то
// следует использовать метод includes()
