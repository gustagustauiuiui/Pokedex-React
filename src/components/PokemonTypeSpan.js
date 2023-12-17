import styles from './layout/Card.module.css'

function PokemonTypeSpan({type}) {
    return (
        <>
            <span className={styles.typeName}>{type}</span>
        </>
    )
}

export default PokemonTypeSpan;