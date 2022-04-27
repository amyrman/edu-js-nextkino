import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import BookingForm from "../components/BookingForm";
import NumOfTickets from "../components/NumOfTickets";
import PaymentModule from "../components/PaymentModule";
import Seating from "../components/Seating";
import StickyBooking from "../components/StickyBooking";

export default function Booking() {
  const [numTickets, setNumTickets] = useState(2);
  const router = useRouter();
  const bookingInfo = {
    numTickets: numTickets,
    movie: "Spiderman XVII",
    date: "31/13",
    time: "Beer-o-clock",
    price: numTickets * 15,
  };

  const handleNumTickets = (newnum) => {
    setNumTickets(newnum);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Booking!</h1>
      <button onClick={() => router.back()}>
        <small> &#10094;back</small>
      </button>
      <div>
        <NumOfTickets
          handleNumTickets={handleNumTickets}
          numTickets={numTickets}
        />
        <Seating />
        <BookingForm bookingInfo={bookingInfo} />
        <PaymentModule />
        <StickyBooking bookingInfo={bookingInfo} numTickets={numTickets} />
      </div>
    </div>
  );
}
