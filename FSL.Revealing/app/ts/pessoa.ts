
interface IData {
    sucesso?: boolean;
    valor: number;
}

interface ICalculo {
    calcular(data: IData): number;
}

class Pessoa implements ICalculo {

    calcular(data: IData): number {
        data = data || { valor: 0 };
        data.sucesso = (data.valor > 0);

        if (data.sucesso) {
            return this.multiplicar(data.valor, 2);
        } else {
            return 0;
        }
    }

    retornarTipo<TModel>(model: TModel): TModel {
        return model;
    }

    private multiplicar(valor: number, multiplo: number): number {
        return valor * multiplo;
    }

}

var calculo = new Pessoa();

calculo.retornarTipo('fabio');

var data: IData = { valor: 80 };
var valor = calculo.calcular(data);
console.log(valor);
