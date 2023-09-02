import ForYouStep1 from "./ForYouStep1";
import ForYouStep2 from "./ForYouStep2";
import ForYouStep3 from "./ForYouStep3";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ProgressBar from "react-bootstrap/ProgressBar";

const ForYou = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="border rounded p-3 whiteBg">
      <div className="mb-3">
        <h3 className="mb-0">Consigliato per te</h3>
        <span>
          <i className="fas fa-eye me-2"></i>Solo per te
        </span>
        <div className="my-2">
          <h5>Principiante</h5>
          <ProgressBar now={60} />
          <span>
            Completa 2 passaggi per raggiungere il livello{" "}
            <a href="#" style={{ textDecoration: "none", fontWeight: "bold" }}>
              Intermedio
            </a>
          </span>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <ForYouStep1 />
          </Carousel.Item>
          <Carousel.Item>
            <ForYouStep2 />
          </Carousel.Item>
          <Carousel.Item>
            <ForYouStep3 />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default ForYou;
