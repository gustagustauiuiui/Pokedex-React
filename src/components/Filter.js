import styles from './Filter.module.css';
import svg from '../assets/svg/icons8-search.svg'
import OptionType from './OptionType';

function Filter() {

    const listTypes = "Normal,Fire,Water,Grass,Flying,Fighti,Poison,Eletric,Ground,Rock,Psychi,Ice,Bug,Ghost,Steel,Dragon,Dark,Fairy";
    const types = listTypes.split(",");

    return (
        <>
            <section className={styles.filterContainer}>
                <div className={styles.options}>
                    <h1>Filtrar por tipo:</h1>
                    <ul id="optionsContainer1">
                        {types.map((t, i) => (
                            <OptionType className={styles.optionType} type={t} key={i}></OptionType>
                        ))}
                    </ul>
                </div>

                <div className={styles.btnSearch}>
                    <button>Pesquisar <img src={svg} alt="" /></button>
                </div>
            </section>
        </>
    )
}

export default Filter;