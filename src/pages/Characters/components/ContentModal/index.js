/** @format */
import React, { memo } from 'react';
import styles from './styles.module.css';

export const ContentModal = memo(({ handleClose, item }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={item.image} alt={item.name} />
      <div className={styles.description}>
        <p className={styles.name}>{item.name}</p>
        <p className={styles.title}>Description</p>
        <p className={styles.subtitle}>Species: {item.species}</p>
        <p className={styles.subtitle}>Gender: {item.gender}</p>
        <p className={styles.subtitle}>Status: {item.status}</p>
        <button onClick={handleClose} className={styles.button}>
          Close
        </button>
      </div>
    </div>
  );
});
