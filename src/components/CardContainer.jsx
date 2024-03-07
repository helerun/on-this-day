import Card from "./Card";
import { useEffect,useState } from "react";
import axios from "axios";

function CardContainer() {
  const [wiki,setWiki] = useState([]);
  const [loading,setLoading] = useState(true);
  // API
  useEffect(function () {
    //array di numeri randomici
    const random = []; 
    // Make a request for a user with a given ID
    axios
      .get("https://en.wikipedia.org/api/rest_v1/feed/onthisday/all/03/06")
      .then(function (response) {
        // handle success
        const events = response.data.events;
        setWiki(events);
        console.log(events.length);
        for(let i = 0; i < 5 ; i++){
          random.push(Math.floor(Math.random() * events.length));
        }
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.error('Error fetching data:', error);
        setLoading(false);
      });
      
  }, []);
  
  return (
    <div className="cardContainer">
      <Card text={wiki[1].text} year={wiki[1].year}isOpen={true} />
      <Card text={wiki[2].text} isOpen={false} />
      <Card text={wiki[3].text}/>
      <Card text={wiki[4].text}/>
      <Card text={wiki[5].text}/>
    </div>
  );
}
export default CardContainer;
