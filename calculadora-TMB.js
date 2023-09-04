import readline from 'readline-sync';

console.log('Calculadora de Taxa Metabolica Basal utilizando a fórmula revisada de Harris-Benedict')

const peso = readline.question('Digite o seu peso (em quilos): ');
const altura = readline.question('Digite a sua altura (em centímetros): ');
const idade = readline.question('Digite a sua idade (em anos): ');
const sexo = readline.question('Digite a opção que corresponde ao seu sexo: 1-Homem  2-Mulher  ');

const tmbMasculino = (88.362+(13.397*peso)+(4.799*altura)-(5.677*idade));
const tmbFeminino = (447.593+(9.247*peso)+(3.098*altura)-(4.330*idade));

//nivel de atividade
const atvBaixa = 1.15;
const atvMedia = 1.20;
const atvAlta = 1.30;

const qtdAgua = peso*35;

//macros e micros
// const proteinas = ;
// const gorduras = ;
// const carboidratos = ;



switch (sexo) {
    case "1":
        console.log('TMB Masculino: ',tmbMasculino.toFixed(2));
        console.log('Atividade Baixa: ',(tmbMasculino*atvBaixa).toFixed(2));
        console.log('Atividade Media: ',(tmbMasculino*atvMedia).toFixed(2));
        console.log('Atividade Alta: ',(tmbMasculino*atvAlta).toFixed(2));
        console.log('--------------------------------------------------------')
        console.log(`Você deve beber no mínimo ${qtdAgua}ml de água por dia.`)
        break;
    case "2":
        console.log('TMB Feminino: ', tmbFeminino.toFixed(2));
        console.log('Atividade Baixa: ',(tmbFeminino*atvBaixa).toFixed(2));
        console.log('Atividade Media: ',(tmbFeminino*atvMedia).toFixed(2));
        console.log('Atividade Alta: ',(tmbFeminino*atvAlta).toFixed(2));
        console.log('--------------------------------------------------------')
        console.log(`Você deve beber ${qtdAgua}ml de água por dia.`)
        break;
}



