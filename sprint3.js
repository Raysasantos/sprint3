var nomesGuardados = []
var contador = 0;

console.log()

function cadastrodeusuario(){

var nome = document.getElementById("nome").value;

    if (nome.trim() === "") {
    alert("Por favor, ensira um nome");
    } else {
        if (nomesGuardados.some(usuario => usuario.nome === nome)){
            alert("Nome já cadastrado")
        } else {
        contador ++;
        nomesGuardados.push({ codigo: contador, nome: nome });
        alert (" Cadastro de " + nome + " com sucesso")
    }
    } 
    }

function exibirNomes(){
    var nomesLista = document.getElementById("categorias");
    nomesLista.innerHTML = ""; 

for (var i = 0 ;i < nomesGuardados.length; i++){
    var li = document.createElement("li");
    var usuario = nomesGuardados[i];
    li.appendChild(document.createTextNode(`Código ${usuario.codigo}`));
    li.appendChild(document.createElement("br"));
    li.appendChild(document.createTextNode(`Nome: ${usuario.nome}`))

    nomesLista.appendChild(li);
} 
}

var botaoCriar = document.getElementById("criarButton");
botaoCriar.onclick = cadastrodeusuario;

var botaoExibirLista = document.getElementById("botaoExibirLista");
botaoExibirLista.onclick = exibirNomes;



