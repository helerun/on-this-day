import React, { useState } from "react";
import CardContainer from "./CardContainer";
import Form from "./Form";

function ParentComponent() {
  const [date, setDate] = useState({
    day: "",
    month: "",
  });

  const handleDateChange = (day, month) => {
    setDate({ day, month });
  };

  return (
    <div>
      <CardContainer date={date} />
      <Form onDateChange={handleDateChange} />
    </div>
  );
}

export default ParentComponent;
