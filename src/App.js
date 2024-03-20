import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Form from "./components/Form";

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
const monthName = (
    date.getMonth() > 9 ? date.getMonth() : "0" + date.getMonth()
).toString();
const dayNumber = date.getDate();

export const SearchContext = createContext();

function App() {
    const [selectedDate, setSelectedDate] = useState({
        day: dayNumber.toString(),
        month: monthName
    });


    return (
        <SearchContext.Provider value={{ selectedDate, setSelectedDate }}>
            <div className="App">
                <Header />
                <CardContainer date={selectedDate} />
                <Form/>
            </div>
        </SearchContext.Provider>
    );
}

export default App;
