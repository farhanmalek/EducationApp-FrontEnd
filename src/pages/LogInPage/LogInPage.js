import React, { useState } from 'react';
import styles from './LoginModal.module.css'; // Import the CSS module

function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    // You can make an API request or handle login within this component
  };

  return (
    <div className={`${styles.modal} ${isOpen ? styles.isActive : ''}`}>
      <div className={styles.modalBackground} onClick={onClose}></div>
      <div className={styles.modalCard}>
        <header className={styles.modalCardHead}>
          <p className={styles.modalCardTitle}>Log In</p>
          <button className={styles.delete} aria-label="close" onClick={onClose}></button>
        </header>
        <section className={styles.modalCardBody}>
          {/* Login form */}
          <form onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label}>Email</label>
              <div className={styles.control}>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Password</label>
              <div className={styles.control}>
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.control}>
                <button className={styles.buttonPrimary} type="submit">
                  Log In
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default LoginModal;
