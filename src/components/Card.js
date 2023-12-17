import styles from './Card.module.css';
import svg from '../assets/svg/reload-svgrepo-com.svg'

const pokemons = [];

async function getPokemon(nameOrID) {
    const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrID}/`);

    return await results.json();
}

async function getPokemons(limit) {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0.`);

    return await result.json();
}

async function storePokemon(nameOrID) {

    await getPokemon(nameOrID).then(pokemon => {
        let pokemonTratado = {
            id: pokemon.id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            sprite: pokemon.sprites.other['official-artwork'].front_default,
            abilities: pokemon.abilities.map(a => {
                return { ability: { name: a.ability.name } }
            }),
            types: pokemon.types.map((t) => {
                return { type: t.type.name };
            })
        };

        pokemons.push(pokemonTratado);

    }).catch((error) => console.log(error));
}

async function consultPokemons(qtd) {

    await getPokemons(qtd).then(pokemons => {
        const resultados = pokemons.results;

        for (let p of resultados) {
            storePokemon(p.name)
        }
    }).catch((error) => console.log("erro: " + error));
    
}

consultPokemons(3);

function Card() {
    return (
    <>
        <section className={styles.card}>

            <div className={styles.headCard}>
                <button>
                    <img src={svg} alt=""/> Aleatório 
                </button>

                <div className={styles.ordenarcard}>
                    <p>Organizar por: </p>
                    <select className={styles.orderOptions}>
                        <option value="Menor número">Menor número</option>
                        <option value="Maior número">Maior número</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                </div>
            </div>

            <div id="mainCard">
                <p>{pokemons.length}</p>
            </div>
        </section>
    </>
    )
}

export default Card;