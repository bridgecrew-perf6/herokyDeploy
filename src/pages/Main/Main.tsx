import {topItemsArray, bottomItemsArray} from "../../constants/mainItems"
import map from "../../assets/img/map/map.png"
import styles from "./Main.module.css"
import uniqID from "uniqid"
import ControlledCarousel from "../../UI/Carousel/Carousel"

const Main = ()=>{
    return (
        <div>
            <ControlledCarousel></ControlledCarousel>
            <div className={styles.directions}>
                <h3 className={styles.directionsTitle}>
                    НАПРАВЛЕНИЯ РАБОТЫ СОЮЗА
                </h3>
                <div>
                    <div className={styles.directionsItems}>
                        {topItemsArray.map((element)=> <img className={styles.directionsItem} key={uniqID()} src={element} alt={element}></img>)}
                    </div>
                    <div className={styles.directionsItems}>
                        {bottomItemsArray.map((element)=> <img className={styles.directionsItem} key={uniqID()} src={element} alt={element}></img>)}
                    </div>
                </div>
            </div>
            <div className={styles.sertification}>
                <h3 className={styles.sertificationTitle}>
                    ВВЕДЕНИЕ ОБЯЗАТЕЛЬНОЙ СЕРТИФИКАЦИИ
                </h3>
                <div className={styles.sertificationInfoBlock}>
                    <img src={map} alt="MAP" className={styles.sertificationMap}/>
                    <p className={styles.sertificationText}>
                    Союз «Электромашиностроение» совместно с Минпромторгом РФ инициирует введение обязательной сертификации на продукцию электромашиностроения, реализуемой на территории ЕАЭС.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main