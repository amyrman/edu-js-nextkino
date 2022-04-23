import { useState, useEffect } from "react";
import NumOfTickets from "../components/NumOfTickets";

export default function Booking() {
  const [numTickets, setNumTickets] = useState(2);

  const handleFewTickets = () => {
    if (numTickets != 1) {
      setNumTickets(numTickets - 1);
    }
  };

  const handleMoreTickets = () => {
    if (numTickets != 8) {
      setNumTickets(numTickets + 1);
    }
  };

  const handleNumTickets = (newnum) => {
    setNumTickets(newnum);
  };

  return (
    <div>
      <h1>Booking!</h1>
      <div>
        {/* <button onClick={handleFewTickets}> &#10094; </button>
        <p>{numTickets}</p>
        <button onClick={handleMoreTickets}>&#10095;</button> */}
        <NumOfTickets
          handleNumTickets={handleNumTickets}
          numTickets={numTickets}
        />
      </div>
    </div>
  );
}
