import { useState } from "react";
import "./Card.scss";

function Card(props) {
  function openClose() {
    //apre e chiude la card
    if (props.isOpen === true) {
      //aprimi la card
    }
  }

  return (
    <div className="container" onClick={openClose}>
      <div className="cardTop">
        <span className="cardEvent">Luogo</span>
        <span className="cardYear">2000</span>
      </div>
      <div className="cardDescription">
        <div className="cardLeft">
          <img
            src="https://media.istockphoto.com/id/1147544807/it/vettoriale/la-commissione-per-la-immagine-di-anteprima-grafica-vettoriale.jpg?s=612x612&w=0&k=20&c=gsxHNYV71DzPuhyg-btvo-QhhTwWY0z4SGCSe44rvg4="
            className="cardImg"
          />
        </div>
        <div className="cardRight">
          <p className="cardText">
            Bradman plays his last innings in 1st-class cricket, gets 30!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
