import React from "react";
import "./Header.scss"; // Assicurati di avere questo file SCSS

const Header = () => {
  // Funzione per ottenere il giorno corrente come stringa
  const getMonthAndDate = () => {
    const date = new Date();
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName = month[date.getMonth()];
    const dayNumber = date.getDate(); // Ottenere il numero del giorno

    return `${monthName}, ${dayNumber}`;
  };

  // Imposta il sottotitolo in base al giorno corrente
  const subtitle = `${getMonthAndDate()}`;

  return (
    <header className="header">
      <h1>What happened on this day?</h1>
      <h2 className="subtitle">{subtitle}</h2>
    </header>
  );
};

export default Header;
