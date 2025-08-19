// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaramos el array vacio
let amigos = [];

//creamos la funcion para agregar un amigo
function agregarAmigo(){
    //obtenemos el valor del input
    let input = document.getElementById("amigo");
    let nombre= input.value.trim();


    if(nombre !== ""){
        //agregamos al array
        amigos.push(nombre);
        mostrarAmigos();
        input.value = "";
        input.focus();   

    } 
    
    else{
        alert("Por favor, inserte un nombre.");
    }

}

function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("No hay amigos registrados.")
        return;
    }

    let indice = Math.floor(Math.random()* amigos.length);
    let seleccionado = amigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<li>🎉 El amigo secreto es: " + seleccionado + "</li>"; 
}