import styles from './Contact.module.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(
      'service_1310kwt',     // replace
      'template_sc8wd08',    // replace
      formRef.current,
      'NUsqp5ohl9C3uRZvk'      // replace
    )
    .then(() => {
      setStatus('success')
      formRef.current.reset()
    })
    .catch(() => {
      setStatus('error')
    })
  }

  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.heading}>Get In <span>Touch</span></h2>
      <p className={styles.sub}>Have a project or opportunity? Let us talk.</p>

      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
        />

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className={styles.successMsg}>
            Message sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p className={styles.errorMsg}>
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  )
}
