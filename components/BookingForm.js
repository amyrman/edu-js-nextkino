import { useState } from "react";
import styles from "./BookingForm.module.css";

const BookingForm = ({ screening, setBookingState, numTickets }) => {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [pay, setPay] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Temporery payment method
      if (pay == true && paymentAmount == numTickets * 15) {
        // Api route to DB
        await fetch(`/api/bookings/${screening.screeningId}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            booking,
          }),
        });
        setBookingState("completed");
      } else {
        // Payment error here
        //
      }
    } catch (err) {
      console.log(err);
    }
  };
  // This is only used for development
  // --->
  const booking = {
    ...screening,
    booking: { name: name, phonenumber: phonenumber, email: email },
  };
  // <--
  //

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <label>Phonenumber:</label>
        <input
          type="text"
          value={phonenumber}
          onChange={(ev) => setPhonenumber(ev.target.value)}
        />
        <label>E-mail:</label>
        <input
          type="text"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <div className={styles.payment}>
          <p>Do you want to pay: </p>
          <label>Yes</label>
          <input
            type="checkbox"
            checked={pay}
            onChange={(ev) => setPay(ev.target.checked)}
          />
          <input
            type="text"
            placeholder="Confirm amount"
            onChange={(ev) => setPaymentAmount(ev.target.value)}
          />
          <button>Book</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
