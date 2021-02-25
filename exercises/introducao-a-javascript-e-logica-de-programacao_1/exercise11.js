/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS

Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR

Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,00 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
 */

let sal_bruto = 3000.00;
let base_calculo;
let sal_liquido;
let inss;
let aliquota1 = 142.80;
let aliquota2 = 354.80;
let aliquota3 = 636.13;
let aliquota4 = 869.36;
let desc_irr;

if (sal_bruto <= 1556.94){
    inss = sal_bruto * 0.08;
}else if (sal_bruto <= 2594.92){
    inss = sal_bruto * 0.09;
} else if (sal_bruto <= 5189.82){
    inss = sal_bruto * 0.11;
}else {
    inss = 570.88;
}

base_calculo = sal_bruto - inss;

if ((base_calculo >= 1903.99 && base_calculo <= 2826.65)){
    desc_irr = (base_calculo * 0.075) - aliquota1;
} else if(base_calculo <= 3751.05){
    desc_irr = (base_calculo * 0.15) - aliquota2 
} else if(base_calculo <= 4664.68){
    desc_irr = (base_calculo * 22.5) - aliquota3 
} else if(base_calculo > 4664.68){
    desc_irr = (base_calculo * 27.5) - aliquota4
}else{
    base_calculo
}

sal_liquido = base_calculo - desc_irr
console.log("O salário líquido será de:",sal_liquido);



