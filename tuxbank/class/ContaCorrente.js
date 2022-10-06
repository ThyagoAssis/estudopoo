export class ContaCorrente{
    //agencia;
    //numeroConta;
    //Associar um cliente
    //cliente;
    //#saldo - privado;
    //_saldo = 0;

    constructor(agencia, conta, cliente){
        this.agencia = agencia;
        this.conta = conta;
        this.cliente = cliente;
    }

    set saldo(saldo){
        this._saldo = saldo; 
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            return valor;
        }
    }

    //O ideal é verificar tudo que não se quer pra usar o return
    //O return para a execução do código
    depositar(valor){
        if(valor <= 0){
           return;
        }
        this.saldo += valor;
    }


    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}