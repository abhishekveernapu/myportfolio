import styles from './Hero.module.css'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>

      {/* Left — Text Content */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>Abhishek</h1>
        <h2 className={styles.title}>MERN Stack Developer</h2>
        <p className={styles.bio}>
          I build scalable web apps and intelligent solutions using the MERN stack.
        </p>
        <Link to="projects" smooth duration={500}>
          <button className={styles.ctaBtn}>View My Work &rarr;</button>
        </Link>
      </motion.div>

      {/* Right — Profile Image */}
      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src="/profile.jpg" alt="Profile" className={styles.image} />
      </motion.div>

    </section>
  )
}
