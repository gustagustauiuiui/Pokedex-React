import styles from './Search.module.css';
import svg from "../../assets/svg/icons8-search.svg";

function Search() {
    return (
        <>
            <div className={styles.pokedexContainer}>
                <div className={styles.titlePokedex}>
                    <h1>Pokédex</h1>
                </div>
                <section className={styles.pesquisa}>
                    <div className={styles.searchBarContainer}>
                        <h1>NOME OU NÚMERO</h1>
                        <div className={styles.searchBar}>
                            <input type="search" name="nameOrNumber"/>
                                <button><img src={svg} alt=""/></button>
                        </div>
                    </div>

                    <div className={styles.infoSearchContainer}>
                        <p>Realize a busca por Pokémon pelo nome ou número e o resultado será fornecido pela RESTfull API
                            pokeapi.co </p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Search;