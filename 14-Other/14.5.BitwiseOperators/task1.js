console.log( 123 ^ 0 ); // 123
console.log( 0 ^ 123 ); // 123
console.log( ~~123 ); // 123

//1.Операция a^b ставит бит результата в 1, если на соответствующей битовой 
//позиции в a или b (но не одновременно) стоит 1.
//Так как в 0 везде стоят нули, то биты берутся в точности как во втором аргументе.
//3.Первое побитовое НЕ ~ превращает 0 в 1, а 1 в 0. А второе НЕ превращает ещё раз, в итоге получается как было.