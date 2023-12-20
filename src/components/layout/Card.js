import styles from './Card.module.css';
import svg from '../../assets/svg/reload-svgrepo-com.svg'
import PokemonCard from '../PokemonCard';
import React, { useEffect, useState } from 'react';

async function getPokemons(limit) {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0.`);
    return await result.json();
}

async function storePokemon(nameOrID) {
    try {
        const pokemon = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrID}/`)).json();
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

function Card() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const pokemonsData = await getPokemons(100);
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

    let options = ["Menor número", "Maior número", "A-Z", "Z-A"];

    function sortByOptionIncreasing(option) {
        return (a, b) => {
            return +(a[option] > b[option]) || +(a[option] === b[option]) - 1;
        };
    }
    function sortByOptionDecreasing(option) {
        return (a, b) => {
            return +(a[option] < b[option]) || +(a[option] === b[option]) - 1;
        };
    }

    function filtrar(e) {
        console.log("filtrando");
        
        let option = e.target.value;

        let sortedPokemons = [...pokemons];

        switch (option) {
            case "Menor número":
                setPokemons(sortedPokemons.sort(sortByOptionIncreasing("id")));
                break;
            case "Maior número":
                setPokemons(sortedPokemons.sort(sortByOptionDecreasing("id")));
                break;
            case "A-Z":
                setPokemons(sortedPokemons.sort(sortByOptionIncreasing("name")));
                break;
            case "Z-A":
                setPokemons(sortedPokemons.sort(sortByOptionDecreasing("name")));
                break;
            default:
                break;
        }

    }

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        console.log(array);
        console.log(pokemons);
        return array;
    };

    const random = async () => {
        setPokemons(shuffleArray([...pokemons]))
    }

    useEffect(() => {
        console.log("render");
    }, [pokemons])

    return (
        <>
            <section className={styles.card}>

                <div className={styles.headCard}>
                    <button onClick={random}>
                        <img src={svg} alt="" /> Aleatório
                    </button>

                    <div className={styles.ordenarcard}>
                        <p>Organizar por: </p>
                        <select className={styles.orderOptions} onChange={(e) => filtrar(e)}>
                            {options.map((opt, index) => {
                                return <option value={opt} key={index}>{opt}</option>
                            })}
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