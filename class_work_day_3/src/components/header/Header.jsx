import styles from "../header/Header.module.css";

const Header = () =>{


    return(
        <>
        <header className={styles.header}>
            <div id={styles.left_side}>
                <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
                <span className={styles.cc}>GeekFoods</span>
            </div>
            <div >
                <ul id={styles.center}>
                    <li>Home</li>
                    <li>Quote</li>
                    <li>Resturants</li>
                    <li>Foods</li>
                    <li>Contact</li>
                </ul>
            </div>
            
                <button id={styles.button}>Get started</button>
            
        </header>
        </>
    )
}

export default Header