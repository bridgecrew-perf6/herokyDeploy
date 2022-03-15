import classNames from "classnames"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../../assets/img/logo.png"
import styles from "./Header.module.css"

const Header = () =>{

    const [navIsOpen, setNavIsOpen] = useState(false)

    return (
        <header className={styles.container}>
            <img src={logo} alt="asd" className={styles.logo}/>
            <div className={styles.menuLines} onClick={()=> setNavIsOpen(!navIsOpen)}>
              <span className={classNames(styles.menuLine1, styles.menuLine)}></span>
              <span className={classNames(styles.menuLine2, styles.menuLine)}></span>
              <span className={classNames(styles.menuLine3, styles.menuLine)}></span>
            </div>
            <nav className={navIsOpen ? classNames(styles.navContainer, styles.opened) : classNames(styles.navContainer, styles.closed)}>
                <NavLink to='/' className={styles.link} onClick={()=> setNavIsOpen(!navIsOpen)}>Главная</NavLink>
                <NavLink to='/partners' className={styles.link} onClick={()=> setNavIsOpen(!navIsOpen)}>Партнеры</NavLink>
                <NavLink to='/contacts' className={styles.link} onClick={()=> setNavIsOpen(!navIsOpen)}>Контакты</NavLink>
            </nav>
        </header>
    )
}

export default Header