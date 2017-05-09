var Pessoa = (function () {
    function Pessoa() {
    }
    Pessoa.prototype.calcular = function (data) {
        data = data || { valor: 0 };
        data.sucesso = (data.valor > 0);
        if (data.sucesso) {
            return this.multiplicar(data.valor, 2);
        }
        else {
            return 0;
        }
    };
    Pessoa.prototype.retornarTipo = function (model) {
        return model;
    };
    Pessoa.prototype.multiplicar = function (valor, multiplo) {
        return valor * multiplo;
    };
    return Pessoa;
}());
var calculo = new Pessoa();
calculo.retornarTipo('fabio');
var data = { valor: 80 };
var valor = calculo.calcular(data);
console.log(valor);
