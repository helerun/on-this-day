import { useState } from "react";
import "./Card.scss";

function Card(props) {
  function openClose() {
    //apre e chiude la card
    // DA FARE !!!!!!!!!
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
          //qui gli sto dicendo che se l'immagine non c'è di nascondere il tag img
          style={{ display: props.img === undefined ? 'none' : 'block' }}
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
