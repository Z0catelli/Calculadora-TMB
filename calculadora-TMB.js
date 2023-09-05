import readline from 'readline-sync';

console.log('Calculadora de Taxa Metabolica Basal utilizando a fórmula revisada de Harris-Benedict.')

const peso = readline.question('Digite o seu peso (em quilos): ');
const altura = readline.question('Digite a sua altura (em centímetros): ');
const idade = readline.question('Digite a sua idade (em anos): ');
const sexo = readline.question('Digite a opção que corresponde ao seu sexo:\n1-Homem\n2-Mulher\n');
const nvlAtvidade = readline.question('Digite a opção que corresponde ao seu nível de atividade:\n1-Sedentário\n2-Levemente ativo\n3-Moderadamente ativo\n4-Altamente ativo\n5-Extremamente ativo\n');

const tmbMasculino = (88.362+(13.397*peso)+(4.799*altura)-(5.677*idade));
const tmbFeminino = (447.593+(9.247*peso)+(3.098*altura)-(4.330*idade));

//nivel de atividade
const sedentario = 1.2;
const leveAtivo = 1.375;
const moderadoAtivo = 1.55;
const altoAtivo = 1.725;
const extremoAtivo = 1.9;

//macros 
const qtdAgua = peso*35;
const proteinas = 0.30;
const gorduras = 0.20;
const carboidratos = 0.50;

switch (sexo) {
    case "1": //Sexo Masculino
        switch(nvlAtvidade){ 
        case "1": //Sedentário
            console.log('--------------------------------------------------------');
            console.log('TMB Masculino: ',tmbMasculino.toFixed(2),'kcal');
            console.log('Sedentário: ',(tmbMasculino*sedentario).toFixed(2),'kcal');
            console.log('--------------------------------------------------------');
            console.log(`Você deve beber no mínimo ${qtdAgua}ml de água por dia.`);
            console.log('Você deve consumir ',(proteinas*tmbMasculino).toFixed(2),'g de proteínas por dia.');
            console.log('Você deve consumir ',(gorduras*tmbMasculino).toFixed(2),'g de gorduras por dia.');
            console.log('Você deve consumir ',(carboidratos*tmbMasculino).toFixed(2),'g de carboidratos por dia.');
            break;

        case "2": //Levemente ativo
            console.log('--------------------------------------------------------');
            console.log('TMB Masculino: ',tmbMasculino.toFixed(2),'kcal');
            console.log('Levemente ativo: ',(tmbMasculino*leveAtivo).toFixed(2),'kcal');
            console.log('--------------------------------------------------------');
            console.log(`Você deve beber no mínimo ${qtdAgua}ml de água por dia.`);
            console.log('Você deve consumir ',(proteinas*tmbMasculino).toFixed(2),'g de proteínas por dia.');
            console.log('Você deve consumir ',(gorduras*tmbMasculino).toFixed(2),'g de gorduras por dia.');
            console.log('Você deve consumir ',(carboidratos*tmbMasculino).toFixed(2),'g de carboidratos por dia.');
            break;

        case "3": //Moderadamente ativo
            console.log('--------------------------------------------------------');
            console.log('TMB Masculino: ',tmbMasculino.toFixed(2),'kcal');
            console.log('Moderadamente ativo: ',(tmbMasculino*moderadoAtivo).toFixed(2),'kcal');
            console.log('--------------------------------------------------------');
            console.log(`Você deve beber no mínimo ${qtdAgua}ml de água por dia.`);
            console.log('Você deve consumir ',(proteinas*tmbMasculino).toFixed(2),'g de proteínas por dia.');
            console.log('Você deve consumir ',(gorduras*tmbMasculino).toFixed(2),'g de gorduras por dia.');
            console.log('Você deve consumir ',(carboidratos*tmbMasculino).toFixed(2),'g de carboidratos por dia.');
            break;

        case "4": //Altamente ativo
            console.log('--------------------------------------------------------');
            console.log('TMB Masculino: ',tmbMasculino.toFixed(2),'kcal');
            console.log('Altamente ativo: ',(tmbMasculino*altoAtivo).toFixed(2),'kcal');
            console.log('--------------------------------------------------------');
            console.log(`Você deve beber no mínimo ${qtdAgua}ml de água por dia.`);
            console.log('Você deve consumir ',(proteinas*tmbMasculino).toFixed(2),'g de proteínas por dia.');
            console.log('Você deve consumir ',(gorduras*tmbMasculino).toFixed(2),'g de gorduras por dia.');
            console.log('Você deve consumir ',(carboidratos*tmbMasculino).toFixed(2),'g de carboidratos por dia.');
            break;
        
        case "5": // Extremamente ativo
            console.log('--------------------------------------------------------');
            console.log('TMB Masculino: ',tmbMasculino.toFixed(2),'kcal');
            console.log('Extremamente ativo: ',(tmbMasculino*extremoAtivo).toFixed(2),'kcal');
            console.log('--------------------------------------------------------');
            console.log(`Você deve beber no mínimo ${qtdAgua}ml de água por dia.`);
            console.log('Você deve consumir ',(proteinas*tmbMasculino).toFixed(2),'g de proteínas por dia.');
            console.log('Você deve consumir ',(gorduras*tmbMasculino).toFixed(2),'g de gorduras por dia.');
            console.log('Você deve consumir ',(carboidratos*tmbMasculino).toFixed(2),'g de carboidratos por dia.');
            break;
        }

        case "2": //Sexo Feminino
        switch(nvlAtvidade){ 
            case "1": //Sedentário
                console.log('--------------------------------------------------------');
                console.log('TMB Feminino: ',tmbMasculino.toFixed(2),'kcal');
                console.log('Sedentário: ',(tmbMasculino*sedentario).toFixed(2),'kcal');
                console.log('--------------------------------------------------------');
                console.log(`Você deve beber no mínimo ${qtdAgua}ml de água por dia.`);
                console.log('Você deve consumir ',(proteinas*tmbMasculino).toFixed(2),'g de proteínas por dia.');
                console.log('Você deve consumir ',(gorduras*tmbMasculino).toFixed(2),'g de gorduras por dia.');
                console.log('Você deve consumir ',(carboidratos*tmbMasculino).toFixed(2),'g de carboidratos por dia.');
                break;
    
            case "2": //Levemente ativo
                console.log('--------------------------------------------------------');
                console.log('TMB Feminino: ',tmbMasculino.toFixed(2),'kcal');
                console.log('Levemente ativo: ',(tmbMasculino*leveAtivo).toFixed(2),'kcal');
                console.log('--------------------------------------------------------');
                console.log(`Você deve beber no mínimo ${qtdAgua}ml de água por dia.`);
                console.log('Você deve consumir ',(proteinas*tmbMasculino).toFixed(2),'g de proteínas por dia.');
                console.log('Você deve consumir ',(gorduras*tmbMasculino).toFixed(2),'g de gorduras por dia.');
                console.log('Você deve consumir ',(carboidratos*tmbMasculino).toFixed(2),'g de carboidratos por dia.');
                break;
    
            case "3": //Moderadamente ativo
                console.log('--------------------------------------------------------');
                console.log('TMB Feminino: ',tmbMasculino.toFixed(2),'kcal');
                console.log('Moderadamente ativo: ',(tmbMasculino*moderadoAtivo).toFixed(2),'kcal');
                console.log('--------------------------------------------------------');
                console.log(`Você deve beber no mínimo ${qtdAgua}ml de água por dia.`);
                console.log('Você deve consumir ',(proteinas*tmbMasculino).toFixed(2),'g de proteínas por dia.');
                console.log('Você deve consumir ',(gorduras*tmbMasculino).toFixed(2),'g de gorduras por dia.');
                console.log('Você deve consumir ',(carboidratos*tmbMasculino).toFixed(2),'g de carboidratos por dia.');
                break;
    
            case "4": //Altamente ativo
                console.log('--------------------------------------------------------');
                console.log('TMB Feminino: ',tmbMasculino.toFixed(2),'kcal');
                console.log('Altamente ativo: ',(tmbMasculino*altoAtivo).toFixed(2),'kcal');
                console.log('--------------------------------------------------------');
                console.log(`Você deve beber no mínimo ${qtdAgua}ml de água por dia.`);
                console.log('Você deve consumir ',(proteinas*tmbMasculino).toFixed(2),'g de proteínas por dia.');
                console.log('Você deve consumir ',(gorduras*tmbMasculino).toFixed(2),'g de gorduras por dia.');
                console.log('Você deve consumir ',(carboidratos*tmbMasculino).toFixed(2),'g de carboidratos por dia.');
                break;
            
            case "5": // Extremamente ativo
                console.log('--------------------------------------------------------');
                console.log('TMB Feminino: ',tmbMasculino.toFixed(2),'kcal');
                console.log('Extremamente ativo: ',(tmbMasculino*extremoAtivo).toFixed(2),'kcal');
                console.log('--------------------------------------------------------');
                console.log(`Você deve beber no mínimo ${qtdAgua}ml de água por dia.`);
                console.log('Você deve consumir ',(proteinas*tmbMasculino).toFixed(2),'g de proteínas por dia.');
                console.log('Você deve consumir ',(gorduras*tmbMasculino).toFixed(2),'g de gorduras por dia.');
                console.log('Você deve consumir ',(carboidratos*tmbMasculino).toFixed(2),'g de carboidratos por dia.');
                break;
            }

        break;
}



