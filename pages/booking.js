import { useState, useEffect } from "react";
// import { useRouter } from "next/router";

import BookingForm from "../components/BookingForm";
import NumOfTickets from "../components/NumOfTickets";
import PaymentModule from "../components/PaymentModule";
import Seating from "../components/Seating";
import StickyBooking from "../components/StickyBooking";
import styles from "../styles/Booking.module.css";
import BackBtn from "../components/BackBtn";

export const getServerSideProps = async (context) => {
  const value = Object.values(context.query);
  const key = Object.keys(context.query);
  const URL = `http://localhost:3000/api/bookings/${value}`;

  if (key == "screeningId") {
    try {
      const res = await fetch(URL);
      if (res.status == 200) {
        const screening = await res.json();
        if (screening) {
          return {
            props: { screening },
          };
        }
      }
    } catch (err) {
      // console.log(err);
    }
  }
  return {
    props: { screening: null },
  };
};

export default function Booking({ screening }) {
  // Bookingpage has to have a screeningId to start
  //
  const [bookingState, setBookingState] = useState(false);
  const [numTickets, setNumTickets] = useState(2);

  const handleNumTickets = (newnum) => {
    setNumTickets(newnum);
  };

  const handleBookingState = (state) => {
    setBookingState(state);
    console.log(state);
  };

  // Change to check for valid screening ID
  //
  if (screening && bookingState != "completed") {
    return (
      <div className={styles.container}>
        <h1>Booking!</h1>
        <h2>{screening.title}</h2>
        <div>
          <BackBtn />
          <NumOfTickets
            handleNumTickets={handleNumTickets}
            numTickets={numTickets}
          />
          <Seating />
          <BookingForm
            screening={screening}
            setBookingState={handleBookingState}
            numTickets={numTickets}
          />
          <PaymentModule />
        </div>
        <StickyBooking screening={screening} numTickets={numTickets} />
      </div>
    );
    // Completed booking
    //
  } else if (screening && bookingState == "completed") {
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
      </div>
    );
  }
}
