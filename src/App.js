import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Form from "./components/Form";
import "./components/ButtonStyles.css";

function App() {
  const [selectedDate, setSelectedDate] = useState({ day: "", month: "" });

  const handleDateChange = (day, month) => {
    setSelectedDate({ day, month });
  };

  const refreshPage = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <Header />

      <CardContainer date={selectedDate} />
      <Form onDateChange={handleDateChange} />
      <div className="centeredContainer">
        <button onClick={refreshPage} className="refreshButton">
          reset
        </button>
      </div>
    </div>
  );
}

export default App;
