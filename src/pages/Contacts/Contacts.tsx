import styles from "./Contacts.module.css"
import background from "../../assets/img/contacts/previewBack.png"
import { Link } from "react-router-dom"

const Contacts = () =>{

    const anketa =  require("../../assets/docs/anketa.docx")
    const zayavlenie =  require("../../assets/docs/zayavlenie.docx")

    return(
        <div className="mainContainer">
            <div className={styles.preview}>
                <img src={background} alt="back"></img>
                <div className={styles.titleFirst}>МЫ ПРОИЗВОДИМ<br></br> ЭЛЕКТРОДВИГАТЕЛИ!</div>
                <div className={styles.titleSecond}>ПРИКОСНИСЬ К<br></br> ИННОВАЦИЯМ!</div>
            </div>
            <div className={styles.rulesBlock}>
                <h3 className={styles.rulesTitle}>
                    ПРАВИЛА ВСТУПЛЕНИЯ В СОЮЗ
                </h3>
                <div className={styles.rulesTextblock}>
                    <p>
                    Для вcтупления в союз необходимо:<br></br>
заполнить анкету (ссылка на анкету)<br></br>
подать заявление (ссылка на пример заявления)<br></br>
отправить по электрому адресу
                    </p>
                    <div className={styles.rulesLinksBlock}>
                        <Link to={anketa} download="анкета на вступление в союз.docx" target='_blank' className={styles.rulesLink}>
                            Анкета
                        </Link>
                        <Link to={zayavlenie}  download="заявление на вступление в союз.docx" rel="noopener noreferrer" target='_blank' className={styles.rulesLink}>
                            Заявление
                        </Link>
                    </div>
                </div>
                <div className={styles.contactsBlock}>
                    <p className={styles.contactsItem}>Контакты:</p>
                    <p className={styles.contactsItem}>адрес</p>
                    <p className={styles.contactsItem}>тел</p>
                    <p className={styles.contactsItem}>эл. адрес</p>
                </div>
            </div>
        </div>
    )
}

export default Contacts