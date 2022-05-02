import React from 'react';
import styles from './Header.module.css';

const HeaderComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerTitle}>Dashboard</div>
    </div>
  );
};

export default HeaderComponent;
