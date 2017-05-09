var pessoa = function () {

    var calcular = function (data) {
        data = data || {};
        data.valor = data.valor || 0;
        data.sucesso = (data.valor > 0);

        if (data.sucesso) {
            return multiplicar(data.valor, 2);
        } else {
            return 0;
        }
    },

    multiplicar = function (valor, multiplo) {
        return valor * multiplo;
    }

    return {
        calcular: calcular
    }

}();

var data = { valor: 80 };
var valor = pessoa.calcular(data);
console.log(valor);
