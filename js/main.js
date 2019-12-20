let lista = ["maçã", "limão", "laranja"];
console.log("lista", lista);
lista.pop();
console.log("lista após pop()", lista);
lista.push("uva");
console.log("lista após push()", lista);

lista.reverse();
console.log("lista após reverse()", lista);
lista.toString();
console.log(
  "lista após toString()",
  lista,
  "-> primeiro elemento com toString(): ",
  lista.toString()[0]
);
console.log("lista com join()", lista.join(" -> "));

let fruits = [
  { nome: "maçã", cor: "vermelha" },
  { nome: "uva", cor: "roxa" }
];
console.log("fruits segunda posição: ", fruits[1].nome);

/* let age = prompt("Informe a idade: ");
if (age >= 18) {
  alert("adulto");
} else if (age >= 12 && age < 18) {
  alert("adolescente");
} else {
  alert("criança");
}
 */
//datas

let d = new Date();
console.log(d.getMonth());
console.log(d.getUTCFullYear());

/* lista.shift(["tamarindo", "tangerina"]);
console.log("lista após shift()", lista);
lista.unshift();
console.log("lista após unshift", lista); */
function botao() {
  //alert("teste ok");
  document.getElementById("greetings").innerHTML = "<b>Valeu por clicar</b>";
}

function redirect() {
  window.open("http://google.com"); //abre nova aba como um pop up
  window.location.href = "http://msn.com.br"; //altera página original
}

function trocar(elemento) {
  //document.getElementById("mouseover").innerHTML = "Texto trocado!"; //-> pode ocasionar mudanças para elementos de mesma tag html
  elemento.innerHTML = "Texto trocado!"; //mudanças apenas nos elementos especificados
}

function voltar(elemento) {
  elemento.innerHTML = "Passe o mouse aqui para trocar o texto...";
}

function load() {
  alert("Página carregada!");
}

function changing(elemento) {
  console.log(elemento.value);
}

//closure: variável pode ser declarada no interior de uma função e ser repassada para funções filhas
// O ideal é sempre usar funções que recebam parâmetros e tenham apenas um retorno

function init() {
  const teste = "Variável teste";

  return function() {
    console.log(`função filha 1 -> parâmetro: ${teste}`);

    return function() {
      console.log(`função filha 2 -> parâmetro: ${teste}`);
      return function() {
        console.log(`função filha 2 -> parâmetro: ${teste}`);
      };
    };
  };
}

const initF1 = init(); //encapsula função init()
const initF2 = initF1(); //encapsula função initF1();
const initF3 = initF2(); //encapsula funcão initF2();

initF3();

//currying: uso de uma função dentro de outra para economizar código

function soma(a) {
  return function(b) {
    return a + b;
  };
}

const soma2 = soma(2);

console.log(soma2(5));
console.log(soma2(6));
console.log(soma2(7));

//Hoisting: recurso relacionado à elevação de uma variável ou função para evitar erros de valores não declarados

//variável: precisa ser declarada ao

function fun() {
  var text; //variável declarada mas não definida, evitando erro que impeça do código continuar sua interpretação
  console.log(text); //resultará em undefined
  text = "Texto";
  console.log(text);
}

fun();

//funções: não necessitam ser declaradas como no caso das variáveis, sendo já elevadas automaticamente

function fun2() {
  log("testando hoisting de funções");

  function log(value) {
    console.log(value);
  }
}
fun2();

//Imutabilidade: uso de cópias de valores ao invés de acessá-los diretamente (cópia de estado)

const user = {
  name: "Alexandre",
  lastName: "Pinheiro"
};

function getUserWithFullName(user) {
  return {
    ...user, //spread operator -> retorna cópia da constante acima e atribui suas propriedades no objeto atual
    fullName: `${user.name} ${user.lastName}`
  };
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);
console.log(user);

//Imutabilidade 2: funções como filter realizam cópias dos vetores envolvidos, mantendo-os inalterados

const students = [
  {
    name: "Fulano",
    grade: 7
  },
  {
    name: "Sicrano",
    grade: 4
  },
  {
    name: "Beltrano",
    grade: 10
  },
  {
    name: "Bellano",
    grade: 10
  },
  {
    name: "Fucrano",
    grade: 8
  }
];
function getApprovedStudents(studentsList) {
  return studentsList.filter(student => student.grade >= 7);
}

console.log("Alunos aprovados:");
console.log(getApprovedStudents(students));

console.log("\nLista de alunos:");
console.log(students);

//Conceitos de variáveis: global, em bloco, de função

var test = "exemplo"; //variável global

(() => {
  console.log(`Valor dentro da função "${test}"`);

  if (true) {
    var test = "example"; //ESCOPO DE BLOCO: var só entende escopo de função ou global, e acaba fazendo hoisting e impede do código quebrar
    console.log(`Valor dentro do if: "${test}"`);
  }

  console.log(`Valor após a execução do if "${test}"`);
})();

(() => {
  let test = "fora do if";
  console.log(`Valor dentro da função "${test}"`);

  if (true) {
    let test = "dentro do if"; //ESCOPO DE BLOCO: let e const respeitam o bloco e não irão fazer hoisting, exigindo que seja necessário ser redeclarada acima
    console.log(`Valor dentro do if: "${test}"`);
  }

  console.log(`Valor após a execução do if "${test}"`); //por let respeitar bloco, o valor do if não altera o valor de fora
})();

//variáveis: const -> não permite que seu endereço seja mudado, porém pode-se alterar seus valores caso esta seja um objeto ou array

const vetor = [1, 2, 3];
console.log("vetor original: ", vetor);
vetor[1] = 5;
vetor.shift();
vetor.push(9);

console.log("vetor alterado: ", vetor);
