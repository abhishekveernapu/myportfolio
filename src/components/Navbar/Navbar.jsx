import styles from './Navbar.module.css'
import { Link } from 'react-scroll'

const links = ['about', 'skills', 'projects', 'contact']

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Abhishek</div>
      <ul className={styles.links}>
        {links.map(link => (
          <li key={link}>
            <Link
              to={link}
              smooth={true}
              duration={75}
              offset={-70}
              spy={true}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
