var pokemonDescription = document.getElementById('content')
var pokemonDescription2 = document.getElementById('content2')

var pokemonImage1 = document.getElementById('imagePokemon1')
var versusImage = document.getElementById('versusImg')
var pokemonImage2 = document.getElementById('imagePokemon2')

var button = document.getElementById('submitButton')
var resetButton = document.getElementById('resetButton')


resetButton.disabled = true

var pokemonEscolhido1 = []
var pokemonEscolhido2 = []

var started = false

var min = Math.ceil(1)
var max = Math.floor(905)
var html = ''

function Buscar() {

    if (started === false) {

        var randomPokemon1 = Math.floor(Math.random() * (max - min)) + min

        var urlPokemon1 = "https://pokeapi.co/api/v2/pokemon/"
        urlPokemon1 = urlPokemon1 + randomPokemon1

        started = true

        fetch(urlPokemon1,)
            .then(response => response.json())
            .then(p1 => {
                var tipoDescrição1 = p1.types.map(typeInfo => typeInfo.type.name).toString()
                html = 'Name: ' + setToUpperCase(p1.name) + '<br>'
                html = html + ' Nº: ' + randomPokemon1 + " Type: " + setToUpperCase(tipoDescrição1).replace(',', '/')
                pokemonDescription.innerHTML = html

                pokemonImage1.innerHTML = "<img src='" + p1.sprites.front_default + "'>"

                button.disabled = true

                pokemonEscolhido1 = [p1.name, tipoDescrição1]

            }).catch(function (err) {
                console.log(err)
            }).then(
                function Buscar2() {

                    var randomPokemon2 = Math.floor(Math.random() * (max - min)) + min

                    var urlPokemon2 = "https://pokeapi.co/api/v2/pokemon/"
                    urlPokemon2 = urlPokemon2 + randomPokemon2

                    fetch(urlPokemon2)
                        .then(response => response.json())
                        .then(p2 => {
                            var tipoDescrição2 = p2.types.map(typeInfo => typeInfo.type.name).toString()
                            html = 'Name: ' + setToUpperCase(p2.name) + '<br>'
                            html = html + ' Nº: ' + randomPokemon2 + " Type: " + setToUpperCase(tipoDescrição2).replace(',', '/')
                            pokemonDescription2.innerHTML = html

                            pokemonImage2.innerHTML = "<img src='" + p2.sprites.front_default + "'>"
                            versusImage.innerHTML = "<img src ='./images/versus.svg' class = 'imageVersus'>"

                            resetButton.disabled = false

                            pokemonEscolhido2 = [p2.name, tipoDescrição2]

                        }).catch(function (erro) {
                            console.log(erro)
                        })
                }
            )
    }
}

function setToUpperCase(val) {
    return val[0].toUpperCase() + val.substring(1)
}

function resetBattle() {
    pokemonImage1.innerHTML = ''
    pokemonImage2.innerHTML = ''
    pokemonDescription.innerHTML = "Card 1" 
    pokemonDescription2.innerHTML = "Card 2"
    versusImage.innerHTML = ''

    button.disabled = false
    started = false

    resetButton.disabled = true
}