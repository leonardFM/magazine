import styles from './style.module.css';

const Footer = () => {
    return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
            <div className={styles.links}>
            <a href="/privacy-policy" className={styles.link}>Privacy Policy</a>
            <a href="/terms-of-service" className={styles.link}>Terms of Service</a>
            <a href="/contact-us" className={styles.link}>Contact Us</a>
            </div>
        </div>
    </footer>
    )
}

export default Footer