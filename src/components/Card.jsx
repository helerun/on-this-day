import { useState } from "react";
import "./Card.css";

function Card(props) {
  return (
      <div className="container" onClick={props.onClick}>
          <div className="cardTop">
              <span className="cardEvent">{props.place}</span>
              <span className="cardYear">{props.year}</span>
          </div>
          <div className="cardDescription">
              <div className="cardLeft">
                  {props.img && (
                      <img
                          src={props.img}
                          className="cardImg"
                          style={{
                              visibility:
                                  props.img === undefined ? "hidden" : "flex"
                          }}
                      />
                  )}
              </div>
              <div className="cardRight">
                  <p className="cardText">{props.text}</p>
              </div>
          </div>
          <div
              className="cardBottom"
              style={{
                  display: props.links === undefined ? "none" : "flex"
              }}
          >
              <a href={props.links} target="_blank">Read the full article</a>
              <span className="arrowButton">{"\u2192"}</span>
          </div>
      </div>
  );
}

export default Card;