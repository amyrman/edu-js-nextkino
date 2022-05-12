import styles from "./StickyBooking.module.css";
const StickyBooking = ({ screening, numTickets }) => {
  return (
    <div className={styles.container}>
      <p className={styles.header}>Booking info</p>
      <p className={styles.tickets}>Numer of tickets: {numTickets}</p>
      <p className={styles.movie}>{screening.title}</p>
      <p className={styles.date}>{screening.date}</p>
      <p className={styles.time}> Time: {screening.time} </p>
      <p className={styles.money}>{numTickets * 15}€£$</p>
    </div>
  );
};

export default StickyBooking;
