"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTiktok, faYoutube, faGlobe } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
            <a href=''>e-Magazine</a>
        </div>
        <ul className={`${styles.navList} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
              <a className={styles.navLink}>Home</a>
          </li>
          <li className={styles.navItem}>
              <a className={styles.navLink}>Magazine</a>
          </li>
          <li className={styles.navItem}>
              <a className={styles.navLink}>Home</a>
          </li>
          <li className={styles.navItem}>
              <a className={styles.navLink}>Magazine</a>
          </li>
          {/* Tambahkan tautan lain di sini */}
        {isOpen && (
            <div className={styles.icons}>
              <a href=''><FontAwesomeIcon icon={faGlobe} /></a>
              <a href=''><FontAwesomeIcon icon={faGlobe} /></a>
              <a href=''><FontAwesomeIcon icon={faGlobe} /></a>
            </div>
          
        )}
        </ul>
        <div className={styles.burger}>
            <div className={styles.burgerContent}>
                <div className={styles.socialLinks}>
                <a className={styles.loginLink}>Login</a>
                </div>
                <div onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
