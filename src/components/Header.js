<<<<<<< HEAD
import styles from './Header.module.css';
import svg from '../assets/svg/pokemon-svgrepo-com.svg'
=======
import styles from './Header.module.css'
import svg from "../assets/svg/pokemon-svgrepo-com.svg"
>>>>>>> initialComponents

function Header() {
    return (
        <>
            <header>
                <div className={styles.logoContainer}>
<<<<<<< HEAD
                    <img src={svg} alt=""/>
=======
                    <img src={svg} alt=""></img>
>>>>>>> initialComponents
                </div>
                <div className={styles.titleContainer}>
                    <div className={styles.heading}>
                        <h1>Pokédex</h1>
                        <span className={styles.headingSpan}></span>
                    </div>
                    <p>A Pokédex é uma enciclopédia virtual que detém todas as espécies de pokémon.</p>
                </div>
            </header>
        </>
    )
}

export default Header;