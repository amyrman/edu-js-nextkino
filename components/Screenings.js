import styles from './Screenings.module.css';

const Screenings = ({ screenings }) => {
  if (screenings.length > 0) {
    return (
      <div className={styles.container}>
        <h4>Screenings</h4>
        <ul className={styles.screenings}>
          {screenings.map((screening) => {
            return (
              <li className={styles.screening} key={screening.date}>
                <p className={styles.date}>{screening.date}</p>
                <p className={styles.time}>{screening.time}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h4>Screenings</h4>
        <p>No screenings atm...</p>
      </div>
    );
  }
};

export default Screenings;
