import styles from "./StickyBooking.module.css";
const StickyBooking = ({ bookingInfo }) => {
  return (
    <div className={styles.container}>
      <p className={styles.header}>Booking info</p>
      <p className={styles.tickets}>
        Numer of tickets: {bookingInfo.numTickets}
      </p>
      <p className={styles.movie}>{bookingInfo.movie}</p>
      <p className={styles.date}>{bookingInfo.date}</p>
      <p className={styles.time}> Time: {bookingInfo.time} </p>
      <p className={styles.money}>{bookingInfo.price}€£$</p>
    </div>
  );
};

export default StickyBooking;
