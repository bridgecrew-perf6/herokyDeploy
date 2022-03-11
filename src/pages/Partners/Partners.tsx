import PartnerItem from "../../components/PartnerItem/PartnerItem"
import partnersArray from "../../constants/partnersArray"
import styles from "./Partners.module.css"

const Partners = ()=>{
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>НАШИ ПАРТНЕРЫ</h3>
            <div>
                {partnersArray.map((element)=><PartnerItem name={element.name} img={element.img} link={element.link} key={element.id} />)}
            </div>
        </div>
    )
}

export default Partners