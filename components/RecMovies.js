import React from 'react';
import styles from '../styles/RecMovies.module.css';

function RecMovies() {
  return (
    <div>
    <div className={styles.heading}>
        <h1>Kino Recommends</h1>
    </div>
    <div className={styles.rec}>
        <div className={styles.movie}>
            <h1>MOVIE 1</h1>
        </div>
        <div className={styles.movie}>
            <h1>MOVIE 2</h1>
        </div>
        <div className={styles.movie}>
            <h1>MOVIE 3</h1>
        </div>
    </div>
    </div>
  )
}

export default RecMovies;