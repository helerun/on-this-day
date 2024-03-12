import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

function CardContainer() {
    //questo sarà il nostro array di tutti gli eventi
    const [wiki, setWiki] = useState([]);
    //questo ci serve per gestire il contenuto in modo da accedere ai dati solo quando tutto è carico
    const [loading, setLoading] = useState(true);

    const [cardOpen, setCardOpen] = useState([]);

    // API
    useEffect(function () {
        //prendiamo la data di oggi
        const date = new Date();
        //trasformo i valori che mi ritornano getmonth e getday in stringhe e aggiungo 1 a get month perchè ritorna i mesi in base 0
        let month = (date.getMonth() + 1).toString();
        let day = date.getDate().toString();

        //qui aggiungo lo 0 davanti ai numeri minori a 10
        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }

        //assegno l'url aggiornato a oggi alla variabile url
        const url =
            "https://en.wikipedia.org/api/rest_v1/feed/onthisday/all/" +
            month +
            "/" +
            day;

        //funzione asincrona che ci recupera i dati dal link fornito
        axios
            .get(url)
            .then(function (response) {
                //buttiamo l'oggettone events dentro a wiki utilizzando setWiki
                const randomWiki = []
                for (let i = 0; i < 5; i++) {
                    //creiamo il nostro numero random da 0 alla lunghezza di wiki
                    const randomIndex = Math.floor(Math.random() * response.data.events.length);
                    //qui controlliamo che non ci siano doppioni
                    if (!randomWiki.includes(randomIndex)) {
                        randomWiki.push(response.data.events[randomIndex]);
                    }
                }
                setWiki(randomWiki);
                setLoading(false);
            })
            .catch(function (error) {
                //questo ci serve per tener traccia di eventuali errori
                console.error("Error fetching data:", error);
                setLoading(false);
            });
        //la dependency è un array vuoto perchè ci serve che faccia partire questa funzione immediatamente
    }, []);

    function openCard(i) {
        setCardOpen(cardOpen === i ? null : i);
    }
    function RenderCards(props) {
        if (props.loading) {
            return <div> Loading...</div>;
        } else {
            
            return (
                <div className="cardContainer">
                    {wiki.map((w, i) => (
                        <Card
                            onClick={() => openCard(i)}
                            key={i}
                            open={cardOpen === i}
                            text={w?.text}
                            extract={w?.pages[0]?.extract}
                            year={w?.year}
                            img={w?.pages[0]?.thumbnail?.source}
                            links={w?.pages[0]?.content_urls?.mobile?.page}
                        />
                    ))}
                </div>
            );
        }
    }

    //finalmente possiamo ritornare il risultato con un semplice tag a cui gli passiamo loading
    return <RenderCards loading={loading} />;
}
export default CardContainer;
