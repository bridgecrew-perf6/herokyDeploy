import uniqID from 'uniqid'
import atlant from "../assets/img/partners/atlant.png"
import maz from "../assets/img/partners/maz.png"
import mogylevlift from "../assets/img/partners/mogylevlift.png"
import polesye from "../assets/img/partners/polesye.png"
import ruselprom from "../assets/img/partners/ruselprom.png"
import segz from "../assets/img/partners/segz.png"
import ural from "../assets/img/partners/ural.png"

interface PartnersArray {
    id: string;
    img: string;
    name: string;
    link: string;
}

const partnersArray: PartnersArray[] = [
    {
        id: uniqID(),
        img: ruselprom,
        name: "КОНЦЕРН «РУСЭЛПРОМ»",
        link: "https://www.ruselprom.ru"
    },
    {
        id: uniqID(),
        img: mogylevlift,
        name: "ОАО «МОГИЛЕВЛИФТМАШ» ",
        link: "https://www.liftmach.by"
    },
    {
        id: uniqID(),
        img: segz,
        name: "АО «САРАПУЛЬСКИЙ ЭЛЕКТРОГЕНЕРАТОРНЫЙ ЗАВОД»",
        link: "https://segz.ru"
    },
    {
        id: uniqID(),
        img: atlant,
        name: "ЗАО «АТЛАНТ»",
        link: "https://www.atlant.by"
    },
    {
        id: uniqID(),
        img: ural,
        name: "АО«МЕДНОГОРСКИЙ  ЭЛЕКТРОТЕХНИЧЕСКИЙ ЗАВОД «УРАЛЭЛЕКТРО»",
        link: "http://ural-motor.ru"
    },
    {
        id: uniqID(),
        img: polesye,
        name: "ОАО «ПОЛЕСЬЕЭЛЕКТРОМАШ»",
        link: "https://rotor.brest.by"
    },
    {
        id: uniqID(),
        img: maz,
        name: "НАУЧНО-ПРОИЗВОДСТВЕННОЕ ОБЪЕДИНЕНИЕ «МЭЗ» ",
        link: "https://mez-electro.ru"
    },
    
]

export default partnersArray