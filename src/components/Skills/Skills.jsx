import styles from './Skills.module.css'
import { motion } from 'framer-motion'

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Express', icon: '🚂' },
  { name: 'Python', icon: '🐍' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Git', icon: '🔧' },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.heading}>My <span>Skills</span></h2>
      <div className={styles.grid}>
        {skills.map((s, i) => (
          <motion.div key={s.name} className={styles.skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}>
            <span>{s.icon}</span>
            {s.name}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
