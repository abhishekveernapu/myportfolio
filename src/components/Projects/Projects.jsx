import styles from './Projects.module.css'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'AI-Powered Health & Wellness Assistant',
    desc: 'An intelligent digital companion that analyzes your personal data to provide real-time, customized guidance for fitness, nutrition, and mental well-being.',
    tech: ['React', 'Flask', 'Google Gemini AI', 'Scikit-learn'],
    github: 'https://github.com/RahulReddy1105/AI-Chatbot', live: '#'
  },
  {
    id: 2,
    title: 'Artifact AI News Feed ',
    desc: 'Full-stack authentication with An AI-driven news aggregator that learns your reading habits over time to deliver a highly personalized feed of articles and automated summaries.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Flask', 'NewsAPI'],
    github: 'https://github.com/RahulReddy1105/news-feed', live: '#'
  },
  {
    id: 3,
    title: 'Real Estate Landing Page',
    desc: 'A clean, responsive landing page for a Real Estate business with a lead-generation form and a small Flask backend to receive submissions.',
    tech: ['Node.React + Vite', 'Flask'],
    github: 'https://github.com/RahulReddy1105/real-estate-page', live: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.heading}>My <span>Projects</span></h2>
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <motion.div key={p.id} className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardDesc}>{p.desc}</p>
            <div className={styles.tags}>
              {p.tech.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
            <div className={styles.links}>
              <a href={p.github} target="_blank"><FaGithub /></a>
              {/* <a href={p.live} target="_blank"><FaExternalLinkAlt /></a> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
