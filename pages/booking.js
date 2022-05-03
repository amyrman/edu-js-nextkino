import { useState, useEffect } from "react";

import BookingForm from "../components/BookingForm";
import NumOfTickets from "../components/NumOfTickets";
import PaymentModule from "../components/PaymentModule";
import Seating from "../components/Seating";
import StickyBooking from "../components/StickyBooking";
import styles from "../styles/Booking.module.css";
import BackBtn from "../components/BackBtn";

export default function Booking() {
  // Bookingpage has to have a screeningId to start
  //
  const [bookingState, setBookingState] = useState(false);
  const [numTickets, setNumTickets] = useState(2);

  const handleNumTickets = (newnum) => {
    setNumTickets(newnum);
  };

  const handleBookingState = (state) => {
    setBookingState(state);
  };

  // Mockinfo
  const bookingInfo = {
    screeningId: 1337,
    numTickets: numTickets,
    movie: "Spiderman XVII",
    date: "31/13",
    time: "Beer-o-clock",
    price: numTickets * 15,
  };

  // Change to check for valid screening ID
  //
  if (bookingState == true) {
    return (
      <div className={styles.container}>
        <h1>Booking!</h1>
        <div>
          <BackBtn />
          <NumOfTickets
            handleNumTickets={handleNumTickets}
            numTickets={numTickets}
          />
          <Seating />
          <BookingForm
            bookingInfo={bookingInfo}
            setBookingState={handleBookingState}
          />
          <PaymentModule />
        </div>
        <StickyBooking bookingInfo={bookingInfo} numTickets={numTickets} />
      </div>
    );
    // Completed booking
    //
  } else if (bookingState == "completed") {
    return (
      <div className={styles.container}>
        <h2> Booking completed</h2>
      </div>
    );
  } else {
    // If trying to reach bookingpage without valid screening ID
    //
    return (
      <div className={styles.container}>
        <h2>No screenning info found</h2>
        <BackBtn />
        {/* Temporery */}
        <button onClick={() => setBookingState(true)}>
          <p>Bokning med screening ID</p>
        </button>
      </div>
    );
  }
}
