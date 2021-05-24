import Link from 'next/link';
import styles from '@/styles/home.module.css';

const Home = () => {
  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.showcase__content}>
          <div className={styles.showcase__text}>
            <div className={styles.sm__title}>Hi 👋 I am</div>
            <h1>ODINAKA JOY</h1>
            <h2 className={styles.title2}>I build for the web</h2>
            <hr className="short" />
            <p>I'm a Software Engineer specialized in designing and developing exceptional websites and web applications</p>
            <p>Need pictures or my bio for a feature or speaker graphics? <Link href="/bio"><a>click here</a></Link></p>
            <Link href="/contact"><a className={styles.showcase__btn}>Get In Touch</a></Link>
          </div>
          <div className={styles.showcase__img}>
            <img src="/images/dinakajoy.png" alt="Odinaka Joy" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;
