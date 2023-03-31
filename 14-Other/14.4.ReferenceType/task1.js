let user = {
  name: "John",
  go: function() { console.log(this.name) }
}

(user.go)() // ошибка!

//Ошибка появляется, потому что точка с запятой пропущена после user = {...}.
//JavaScript не вставляет автоматически точку с запятой перед круглой 
//скобкой (user.go)(), поэтому читает этот код так:
//let user = { go:... }(user.go)()

//Если вставим точку с запятой – всё заработает:

user = {
  name: "John",
  go: function() { console.log(this.name) }
};

(user.go)() // John
