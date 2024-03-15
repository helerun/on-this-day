import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Form from "./components/Form";

function App() {
  const [selectedDate, setSelectedDate] = useState({ day: "", month: "" });

  const handleDateChange = (day, month) => {
    setSelectedDate({ day, month });
  };

  return (
    <div className="App">
      <Header />
      <CardContainer date={selectedDate} />
      <Form onDateChange={handleDateChange} />
    </div>
  );
}

export default App;
