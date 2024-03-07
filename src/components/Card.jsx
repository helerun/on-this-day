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
        <span className="cardEvent">{props.place}</span>
        <span className="cardYear">{props.year}</span>
      </div>
      <div className="cardDescription">
        <div className="cardLeft">
          <img
            src={props.img}
            className="cardImg"
          />
        </div>
        <div className="cardRight">
          <p className="cardText">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
