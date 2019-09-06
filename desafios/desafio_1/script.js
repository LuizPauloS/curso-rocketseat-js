/*exercicio 1:  
Crie uma função que dado o objeto a seguir:

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

Retorne o seguinte conteúdo:
O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.*/

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
}

function retornaStringComEndereco(endereco) {
    return `O usuário mora em ${endereco.cidade} / ${endereco.uf}, 
        no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.`;
}

console.log(`Resultado Exercício 1:\n`);
console.log(retornaStringComEndereco(endereco));

/*exercicio 2:

Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function pares(x, y) {
 // código aqui
}

pares(32, 321);*/

var x = 1;
var y = 500;

function retornarNumerosParesDoIntervaloXY(x, y) {
    var numerosPares = [];
    for(i=x; x < y; x++) {
        if (x % 2 == 0) {
            numerosPares.push(x);
        }
    }
    return numerosPares;
}

console.log(`\nResultado Exercício 2:\n`);
console.log(`Números pares do intervalo (x = ${x} / y = ${y}) = 
    (${retornarNumerosParesDoIntervaloXY(x, y)}).`);

/*exercicio 3:

Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.

function temHabilidade(skills) {
 // código aqui
}

var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false*/

var js = "Javascript";
var habilidades = ["Javascript 2", "ReactJS", "React Native", "Angular", "Vue"];

function retornaBooleanoSePossuirJavascript(habilidades) {
    return habilidades.indexOf(js) == -1 ? false : true;
}

console.log(`\nResultado Exercício 3:\n`);
console.log(`Existe a skill "${js}" = ${retornaBooleanoSePossuirJavascript(habilidades)}.`);

/*exercicio 4:

Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

function experiencia(anos) {
 // código aqui
}

var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
*/

var anosEstudo = 5;

function retornaExperienciaPelosAnosDeEstudo(anosDeEstudo) {
    if (anosDeEstudo > 0 && anosDeEstudo <= 1) {
        return 'Iniciante';
    } else if (anosDeEstudo > 1 && anosDeEstudo <= 3) {
        return 'Intermediário';
    } else if (anosDeEstudo > 3 && anosDeEstudo <= 6) {
        return 'Avançado';
    } else if (anosDeEstudo > 7) {
        return 'Jedi Master';
    }
    return 'ERRO AO VERIFICAR NÍVEL DE EXPERIÊNCIA!';
}

console.log(`\nResultado Exercício 4:\n`);
console.log(`O usuário possui ${anosEstudo} anos de estudo. Portanto o nível de experiência 
    é = "${retornaExperienciaPelosAnosDeEstudo(anosEstudo)}".`);

/*exercicio 5:

Dado o seguinte vetor de objetos:

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

Escreva uma função que produza o seguinte resultado:
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
*/

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function retornaStringComHabilidadesDaListaDeDevs(devs) {
    for(let dev of devs) {
        console.log(`O ${dev.nome} possui as habilidades: ${dev.habilidades.join([separator = ', '])}.`);
    }
}

console.log(`\nResultado Exercício 5:\n`);
retornaStringComHabilidadesDaListaDeDevs(usuarios);
console.log(`\n`);