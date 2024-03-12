import React, { useState } from "react";
import "./Form.css";
import Immagine from "../image/memory_eye-fill.png";

function Form() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  const getMaxDaysInMonth = (month) => {
    const thirtyDaysMonths = ["04", "06", "09", "11"];
    if (month === "02") {
      return 28;
    } else if (thirtyDaysMonths.includes(month)) {
      return 30;
    }
    return 31;
  };

  const handleDayChange = (event) => {
    const dayValue = event.target.value;
    const maxDays = getMaxDaysInMonth(month);
    if (dayValue >= 1 && dayValue <= maxDays) {
      setDay(dayValue);
    } else {
      setDay(""); // Resettare il giorno se non valido
    }
  };

  const handleMonthChange = (event) => {
    const monthValue = event.target.value;
    setMonth(monthValue);
    const maxDays = getMaxDaysInMonth(monthValue);
    if (day > maxDays) {
      setDay("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (day !== "" && month !== "") {
      console.log("Giorno selezionato:", day);
      console.log("Mese selezionato:", month);
    } else {
      console.log("Data non valida");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <img src={Immagine} alt="Descrizione Immagine" />
      <h2>
        <pre>
          View another day,
          {"\n"}
          insert it here:
        </pre>
      </h2>
      <div className="input-container">
        <label>
          <input
            placeholder="day"
            type="number"
            value={day}
            onChange={handleDayChange}
            min="1"
            max="31"
          />
        </label>
        <label>
          <select value={month} onChange={handleMonthChange}>
            <option value="" disabled selected hidden>
              month
            </option>
            <option value="01">January</option>
            <option value="02">February </option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December </option>
          </select>
        </label>
      </div>
      <button type="submit">search</button>
    </form>
  );
}

export default Form;
