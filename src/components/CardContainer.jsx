import Card from "./Card";
import { useEffect } from "react";
import axios from "axios";

function CardContainer() {
  // API
  //generiamo un array di numeri randomici max 5 per andare a pescare
  //in modo randomico l'ID dell'array del JSON
  useEffect(function () {
    // Make a request for a user with a given ID
    axios
      .get("https://en.wikipedia.org/api/rest_v1/feed/onthisday/all/03/06")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log("executed");
      });
  }, []);
  return (
    <div className="cardContainer">
      <Card title="titolo" isOpen={true} />
      <Card title="asdadadsadsadsadsads" isOpen={false} />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
export default CardContainer;
