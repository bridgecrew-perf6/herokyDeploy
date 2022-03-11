import { NavLink } from "react-router-dom"
import logo from "../../assets/img/logo.png"
import styles from "./Header.module.css"

const Header = () =>{
    return (
        <header className={styles.container}>
            <img src={logo} alt="asd" />
            <nav>
                <NavLink to='/' className={styles.link}>Главная</NavLink>
                <NavLink to='/partners' className={styles.link}>Партнеры</NavLink>
                <NavLink to='/contacts' className={styles.link}>Контакты</NavLink>
            </nav>
        </header>
    )
}

export default Header