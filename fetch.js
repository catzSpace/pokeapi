const input = document.querySelector('.pokename');
const btn = document.querySelector('.env');
const cont = document.querySelector('.results');



btn.addEventListener('click', (event) => {
    event.preventDefault()
    searchPokemon(input.value)
})

function searchPokemon(pokemon){
    let POKE_API = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    fetch(POKE_API)
        .then((res) => res.json())
        .then((data) => {
            create(data)
        })
}

function create(pokemon){
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const p = document.createElement('p');
    p.textContent = pokemon.name

    cont.appendChild(img)
    cont.appendChild(p)
}
