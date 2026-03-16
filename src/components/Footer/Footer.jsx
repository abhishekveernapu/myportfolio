import styles from './Footer.module.css'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="https://github.com/abhishekveernapu" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="http://www.linkedin.com/in/abhishek-veernapu" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        
      </div>
      <p className={styles.copy}>
        Designed and Built by <span>Abhishek</span> &copy; {year}
      </p>
    </footer>
  )
}
