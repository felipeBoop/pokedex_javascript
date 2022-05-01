var btnBuscaPokemon = document.querySelector("#busca-pokemon");

btnBuscaPokemon.addEventListener("click", function(nomePokemon){

    var inputNomePokemon = document.querySelector("#nome-pokemon");
    var nomePokemon = inputNomePokemon.value;

    var xhr = new XMLHttpRequest();
    console.log(nomePokemon);

    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + nomePokemon);
    xhr.addEventListener("load", function(){
    
        if(xhr.status == 200){

            var resposta = xhr.responseText;
            var pokemon = JSON.parse(resposta);

            getDados(pokemon);

        }else{
            console.log(xhr.status);
            if(xhr.responseText);
        }

    });
    xhr.send();
});