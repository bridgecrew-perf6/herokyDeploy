import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import carouselFirst from "../../assets/img/Carousel/carouselFrist.png"
import carouselSecond from "../../assets/img/Carousel/carouselSecond.png"

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex: any, e: any) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselFirst}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Отраслевой союз «Электромашиностроение»</h3>
            <p>является организацией, включающей ведущих производителей электродвигателей на территории Российской Федерации и Республики Беларусь с долей рынка по производимым асинхронным электродвигателям не менее 70 %.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselSecond}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>ОТРАСЛЕВОЙ СОЮЗ «ЭЛЕКТРОМАШИНОСТРОЕНИЕ» - ЭТО ПОДДЕРЖКА ОТРАСЛИ И КАЖДОГО УЧАСТНИКА В ОТДЕЛЬНОСТИ.
</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default ControlledCarousel;
  