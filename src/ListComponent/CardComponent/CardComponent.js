import React from 'react';
import styles from './CardComponent.module.css';

const CardComponent = ({ id, title, textForCard, remove }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <div>{title}</div>
        <div
          onClick={() => {
            remove(id);
          }}
        >
          close
        </div>
      </div>
      <div className={styles.cardText}>{textForCard}</div>
    </div>
  );
};

export default CardComponent;
