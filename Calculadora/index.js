import { Calculadora } from "./Calculadora";

const calcular = new Calculadora();
calcular.valorUm = prompt("Informe o valor um: ");
calcular.valorDois = prompt("Informe o valor Dois: ");

document.write("Soma: " + calcular.somar() + "<br>");
document.write("Subtração: " + calcular.subtrair() + "<br>" );
document.write("Multiplicação: " + calcular.multiplicacao() + "<br>" );
document.write("Divisaõ: " + calcular.divisao());