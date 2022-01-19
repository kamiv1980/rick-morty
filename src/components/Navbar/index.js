import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../services/routes';
import styles from './styles.module.css';

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link className={styles.link} to={routes.Characters}>
          Characters
        </Link>
        <Link className={styles.link} to={routes.MyList}>
          My watch list
        </Link>
      </nav>
    </header>
  );
};
