export class Calculadora{
    valorUm;
    valorDois;
    _resultado;

    somar(){
        this._resultado = parseFloat(this.valorUm) + parseFloat(this.valorDois);
        return this._resultado;
    }

    subtrair(){
        this._resultado = parseFloat(this.valorUm) - parseFloat(this.valorDois)
        return this._resultado;
    }

    multiplicacao(){
        this._resultado = parseFloat(this.valorUm) * parseFloat(this.valorDois)
        return this._resultado;
    }

    divisao(){
        this._resultado = parseFloat(this.valorUm) / parseFloat(this.valorDois)
        return this._resultado;
    }


}