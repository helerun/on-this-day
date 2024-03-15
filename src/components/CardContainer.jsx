import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function CardContainer({ date }) {
  const [wiki, setWiki] = useState([]); // Array degli eventi
  const [loading, setLoading] = useState(true); // Stato di caricamento
  const [cardOpen, setCardOpen] = useState(null); // Stato per la card aperta

  useEffect(() => {
    // Determina giorno e mese

    let day = date.day;
    let month = date.month;

    // Se non sono definiti, usa la data corrente
    if (!day || !month) {
      const today = new Date();
      day = today.getDate().toString();
      month = (today.getMonth() + 1).toString();
    }

    // Aggiungi zero davanti ai numeri minori di 10
    if (day.length < 2) day = "0" + day;
    if (month.length < 2) month = "0" + month;

    // Costruisci l'URL dell'API
    const url = `https://en.wikipedia.org/api/rest_v1/feed/onthisday/all/${month}/${day}`;

    // Richiesta all'API
    axios
      .get(url)
      .then((response) => {
        // Scegli eventi casuali
        const randomWiki = [];
        for (let i = 0; i < 5; i++) {
          const randomIndex = Math.floor(
            Math.random() * response.data.events.length
          );
          const event = response.data.events[randomIndex];
          if (!randomWiki.includes(event)) {
            randomWiki.push(event);
          }
        }
        setWiki(randomWiki);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [date]); // Aggiungi date come dipendenza per ricaricare al cambiamento della data

  // Funzione per gestire l'apertura/chiusura delle card
  function openCard(index) {
    setCardOpen(cardOpen === index ? null : index);
  }

  // Render delle card
  function RenderCards() {
    if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="cardContainer">
          {wiki.map((event, index) => (
            <Card
              onClick={() => openCard(index)}
              key={index}
              open={cardOpen === index}
              text={event?.text}
              extract={event?.pages[0]?.extract}
              year={event?.year}
              img={event?.pages[0]?.thumbnail?.source}
              links={event?.pages[0]?.content_urls?.mobile?.page}
            />
          ))}
        </div>
      );
    }
  }

  return <RenderCards />;
}

export default CardContainer;
