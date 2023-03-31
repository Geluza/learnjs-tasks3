let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop < 0) {
      // даже если обращение к элементу идёт как arr[1]
      // prop является строкой, нужно преобразовать её к числу
      prop = +prop + target.length;
    }
    console.log(Reflect.get(target, prop, receiver));
  }
});


console.log(array[-1]); // 3
console.log(array[-2]); // 2

