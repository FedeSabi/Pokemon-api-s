import { listPokemon, pokemon } from './interface/interface';

export default function fetch_pokemon(): void {
    const urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon/';
    const pokeBox: HTMLElement = document.getElementById('poke-box') as HTMLElement;
    const fragment: DocumentFragment = document.createDocumentFragment();

    fetch(urlPokemon)
    .then(res => res.json())
    .then((res: listPokemon) => {
       res.results.forEach((pokemon) => {
        const figure: HTMLElement = document.createElement('figure')
        const img: HTMLElement = document.createElement('img')
        const figcaption: HTMLElement = document.createElement('figcaption')
        const namePokemon: Node = document.createTextNode(pokemon.name)
        
        img.setAttribute('alt', pokemon.name)
        img.setAttribute('title', pokemon.name)
        
        fetch(pokemon.url)
        .then(res => res.json())
        .then((res: pokemon) => {
            img.setAttribute('src', res.sprites.front_default)
        })

        figcaption.appendChild(namePokemon)
        figure.appendChild(img)
        figure.appendChild(figcaption)
        fragment.appendChild(figure)

       })
       console.log(res)
       pokeBox.appendChild(fragment)
    })

}
