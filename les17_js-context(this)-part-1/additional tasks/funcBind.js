/*
Функция bind
С помощью методов функций call или apply опишите функцию bind(func, 
context, [arg1], [arg2], ...[argn]), которая будет работать аналогично методу .bind функций
Основные требования:
Экспортируйте из файла функцию с именем bind
Для реализации bind используйте методы функций call или apply
Сигнатура bind(func, context, [arg1], [arg2]), где func - функция, к которой привязывается контекст; context - контекст для новой функции; далее необязательные 
аргументы arg1, arg2 ... для целевой функции func
*/

function bind(func, context, ...args) {
  return function() {
    return func.apply(context, args.concat(Array.from(arguments)));
  };
}

module.exports = { bind };