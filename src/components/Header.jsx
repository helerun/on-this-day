import React, { useContext } from "react";
import "./Header.css"; // Assicurati di avere questo file SCSS
import { SearchContext } from "../App";

const Header = () => {
    const { selectedDate } = useContext(SearchContext);
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
            "December"
        ];
        const monthName = month[parseInt(selectedDate.month) ];
        const dayNumber = selectedDate.day; // Ottenere il numero del giorno
        if (dayNumber < 10) {
            return `${monthName} 0${dayNumber}`;
        } else {
            return `${monthName} ${dayNumber}`;
        }
    };

    // Imposta il sottotitolo in base al giorno corrente
    const subtitle = `${getMonthAndDate()}`;

    return (
        <header className="header">
            <h1 className="title">
                What happened
                <br /> on this day?
            </h1>
            <h2 className="subtitle">{subtitle}</h2>
        </header>
    );
};

export default Header;
