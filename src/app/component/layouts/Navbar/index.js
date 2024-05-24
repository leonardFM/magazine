// components/Navbar.js

import Link from "next/link";
import styles from './style.module.css';

const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <p className={styles.navLink}>Home</p>
                        </Link>
                    </li>.
                    <li className={styles.navItem}>
                        <Link href="/magazine">
                            <p className={styles.navLink}>Magazine</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
