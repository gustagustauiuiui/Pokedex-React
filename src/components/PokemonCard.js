import PokemonTypeSpan from "./PokemonTypeSpan";
import styles from "./layout/Card.module.css";

function PokemonCard({id, sprite, name, types}) {

    return (
        <>
            <div className={styles.CardPokemon}>
                <img src={sprite} alt={name}/>
                <div className={styles.infos}>
                    <p>{id}</p>
                    <h1>{name}</h1>
                    <div className={styles.types}>
                        {types.map((t, i) => (
                            <PokemonTypeSpan key={i} type={t}></PokemonTypeSpan>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonCard;