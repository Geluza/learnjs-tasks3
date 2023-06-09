let obj, method;

obj = {
  go: function() { console.log(this); }
};

//1.Это обычный вызов метода объекта через 
//точку ., и this ссылается на объект перед точкой.
obj.go();               // (1) [object Object]

//2.Здесь то же самое. Круглые скобки не изменяют порядок выполнения операций.
(obj.go)();             // (2) [object Object]

//3.Здесь мы имеем более сложный вызов (expression).method(). 
//Такой вызов работает, как если бы он был разделён на 2 строчки:
//f = obj.go; // вычисляется выражение (переменная f ссылается на код функции)
//f();        // вызов функции, на которую ссылается f
//соответственно f() выполняется как функция, без передачи значения this.
(method = obj.go)();    // (3) undefined

//4. Тут похожая ситуация на случай 3– идёт потеря значения this.
(obj.go || obj.stop)(); // (4) undefined