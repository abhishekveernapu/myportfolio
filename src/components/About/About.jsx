import styles from './About.module.css'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 0.7 }}
      >
        

    <div className={styles.content}>
  <h2 className={styles.heading}>
    About <span>Me</span>
  </h2>

  {/* Opening strong line */}
  <p className={styles.intro}>
    Highly motivated B.Tech student in Artificial Intelligence &amp; Data Science
    at VVIT Guntur, with a strong passion for technology-driven innovation.
  </p>

  <p className={styles.text}>
    I have hands-on expertise in MERN stack development, building robust and
    scalable full-stack web applications from the ground up. I enjoy crafting
    real-world solutions that combine intelligent systems with clean, responsive UIs.
  </p>

  <p className={styles.text}>
    I am deeply interested in AI agents and emerging AI tools &amp; technologies,
    and am currently undergoing professional training in AI &amp; ML to sharpen
    my applied knowledge.
  </p>

  <p className={styles.text}>
    I am actively looking for a dynamic role that encourages continuous learning,
    technical growth, and contributes to user-centric, impactful solutions that
    drive real business value.
  </p>

  <ul className={styles.details}>
    <li><span>Location:</span> Guntur, Andhra Pradesh</li>
    <li><span>Degree:</span> B.Tech in AI &amp; Data Science</li>
    <li><span>College:</span> VVIT Guntur</li>
    <li><span>Status:</span> Open to Opportunities</li>
  </ul>

  <a href="/resume.pdf" download className={styles.resumeBtn}>
    Download Resume &darr;
  </a>
</div>


      </motion.div>
    </section>
  )
}
