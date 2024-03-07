import Card from "./Card";
import { useEffect,useState } from "react";
import axios from "axios";

function CardContainer() {
    //questo sarà il nostro array di tutti gli eventi
    const [wiki,setWiki] = useState([]);
    //questo ci serve per gestire il contenuto in modo da accedere ai dati solo quando tutto è carico
    const [loading,setLoading] = useState(true);

    // API
    useEffect(function () {
        //prendiamo la data di oggi
        const date = new Date();
        //trasformo i valori che mi ritornano getmonth e getday in stringhe e aggiungo 1 a get month perchè ritorna i mesi in base 0
        let month = (date.getMonth() + 1).toString();
        let day = date.getDate().toString();

        //qui aggiungo lo 0 davanti ai numeri minori a 10
        if (day < 10) {
            day = '0'+ day;
        } 
        if (month < 10) {
            month = '0'+ month;
        }

        //assegno l'url aggiornato a oggi alla variabile url
        const url = "https://en.wikipedia.org/api/rest_v1/feed/onthisday/all/"+ month + "/"+ day;
        
        //funzione asincrona che ci recupera i dati dal link fornito
        axios.get(url)
        .then(function (response) {
            //buttiamo l'oggettone events dentro a wiki utilizzando setWiki
            setWiki(response.data.events);
            setLoading(false);
        })
        .catch(function (error) {
            //questo ci serve per tener traccia di eventuali errori
            console.error('Error fetching data:', error);
            setLoading(false);
        });
    //la dependency è un array vuoto perchè ci serve che faccia partire questa funzione immediatamente
    }, []);

    //questa funzione ci serve per poter mostrare i dati in base alla variabile loading
    function RenderCards(props) {
        if (props.loading) {
            return <div>Loading...</div>;
        } else {
            //array vuoto dove ci metteremo 5 valori randomici per recuperare 5 eventi a caso dallo stato wiki
            const random = [];

        while (random.length < 5) {
            //creiamo il nostro numero random da 0 alla lunghezza di wiki
            const randomIndex = Math.floor(Math.random() * wiki.length);
            //qui controlliamo che non ci siano doppioni
            if (!random.includes(randomIndex)) {
                random.push(randomIndex);
            }
        }

        //con questo facciamo in modo che per ogni elemento dell'array random gli generiamo 
        //il suo componente card che si prende come indice il numero randomico
        //i sta per la corrente iterazione
        //index è il valore del numero randomico
        //il punto di domanda inserito (wiki[index]?) è per controllare che il valore che stiamo accedendo non sia undefined e se lo è
        //non esce un errore ma ce lo gestiamo altrove (Vedi componente Card.jsx)
        return (
            <div className="cardContainer">
                {random.map((index, i) => (
                <Card key={i} text={wiki[index]?.text} year={wiki[index]?.year} img={wiki[index]?.pages[0]?.thumbnail?.source}/>
                ))}
            </div>
            );
        }
    }
    
    //finalmente possiamo ritornare il risultato con un semplice tag a cui gli passiamo loading
    return <RenderCards loading={loading}/>;
}
export default CardContainer;
