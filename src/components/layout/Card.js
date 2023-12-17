import styles from './Card.module.css';
import svg from '../../assets/svg/reload-svgrepo-com.svg'
import PokemonCard from '../PokemonCard';
import React, { useEffect, useState } from 'react';

async function getPokemon(nameOrID) {
    const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrID}/`);
    
    return await results.json();
}

async function getPokemons(limit) {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0.`);
    
    return await result.json();
}

async function storePokemon(nameOrID) {
    try {
        const pokemon = await getPokemon(nameOrID);
        const pokemonTratado = {
            id: pokemon.id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            sprite: pokemon.sprites.other['official-artwork'].front_default,
            abilities: pokemon.abilities.map(a => {
                return { ability: { name: a.ability.name } }
            }),
            types: pokemon.types.map((t) => {
                return t.type.name;
            })
        };
        
        return pokemonTratado;
    } catch (error) {
        console.log("erro: " + error);
    }
    
}

async function consultPokemons(qtd) {
    try {
        const pokemonsData = await getPokemons(qtd);
        const resultados = pokemonsData.results;
        
        const pokemonsPromise = resultados.map(p => storePokemon(p.name));
        const result = Promise.all(pokemonsPromise);
        
        return result;
    } catch (error) {
        console.log("error" + error);
    }
}

function Card() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const pokemonsData = await getPokemons(300);
                const resultados = pokemonsData.results;
                
                const pokemonsPromise = resultados.map(p => storePokemon(p.name));
                const result = await Promise.all(pokemonsPromise);
                
                setPokemons(result);
            } catch (error) {
                console.log("error" + error);
            }
        };
        
        fetchPokemons();
    }, []);
    
    return (
        <>
            <section className={styles.card}>

                <div className={styles.headCard}>
                    <button>
                        <img src={svg} alt="" /> Aleatório
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

                <div className={styles.mainCard}>
                    {pokemons.map(p => (
                         <PokemonCard key={p.id} id={p.id} name={p.name} sprite={p.sprite} types={p.types} />
                    ))}

                </div>
            </section>
        </>
    )
}

export default Card;