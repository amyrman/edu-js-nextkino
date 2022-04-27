import styles from "./BookingForm.module.css";
import { useState } from "react";
const BookingForm = ({ bookingInfo, numTickets }) => {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [pay, setPay] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onPhonenumberChange = (event) => {
    setPhonenumber(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Temoprery payment method
    if (pay == true && paymentAmount == bookingInfo.price) {
      console.log(booking);
      // Api route to DB
      await fetch(`/api/bookings/${bookingInfo.screeningId}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          booking,
        }),
      });
    } else {
      // Payment error here
      //
    }
  };
  const booking = {
    name: name,
    phonenumber: phonenumber,
    email: email,
    ...bookingInfo,
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={onNameChange} />
        <label>Phonenumber:</label>
        <input type="text" value={phonenumber} onChange={onPhonenumberChange} />
        <label>E-mail:</label>
        <input type="text" value={email} onChange={onEmailChange} />
        <div className={styles.payment}>
          <label>Do you want to pay: </label>
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
