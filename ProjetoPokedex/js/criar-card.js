var card = document.querySelector("#main-card");
console.log(card);

function getDados(pokemon){
    var img = document.querySelector("#img-pokemon-card");
    img.src = pokemon.sprites.other.home.front_default;

    var nome = document.querySelector("#nome-card");
    nome.textContent = pokemon.name;
   
    var tipo = document.querySelector("#tipo-card");
    tipo.textContent = pokemon.types[0].type.name;
    
    var habilidade = document.querySelector("#habilidades-card");
    habilidade.textContent = pokemon.abilities[0].ability.name;
    
    var peso = document.querySelector("#peso-card");
    peso.textContent = pokemon.weight;

    mostrarCard();
}

function mostrarCard(){
    card.classList.replace("invisivel", "main-card")
}
