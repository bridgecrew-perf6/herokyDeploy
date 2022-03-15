import styles from "./PartnerItem.module.css"

interface PartnerItem {
    img: string;
    name: string;
    link: string;
}

const PartnerItem = ({img, name, link}: PartnerItem)=>{
    return (
        <div className={styles.container}>
            <img src={img} alt={name} className={styles.image}/>
            <div className={styles.textBlock}>
                <div className={styles.name}>{name}</div>
                <a href={link} className={styles.link} target="_blank">{link}</a>
            </div>
        </div>
    )
}

export default PartnerItem