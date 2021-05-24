import Image from 'next/image';
import styles from '@/styles/contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className="container">
        <h2>Get In Touch</h2>
        <br />
        <div className={styles.output}></div>
        <div className={styles.cont}>
          <form action="" method="POST" enctype="multipart/form-data">
            <p className={styles.p}>Do you have an interesting project that matches my skill set <span>or</span> want to get extra information on any of my work <span>or</span> just to say hello? </p>
            <p className={styles.p}><i>I’m always open to discussing new and exciting opportunities.</i></p><br />
            <input type="text" name="uname" id="uname" placeholder="Your Name Please..." required />
            <input type="email" name="email" id="email" placeholder="Your Email Please..." required />
            <input type="text" name="subject" id="subject" placeholder="Your Reason Please..." required />
            <textarea name="body" id="body" cols="30" rows="10" placeholder="Your Message Please..." required></textarea>
            <div id="response"></div>
            <input type="submit" id="submit" value="SEND" />
          </form>

          <div className={styles.map}>
            <Image src="/images/dinaka-joy.jpg" alt="Odinaka Joy" width={350} height={400} />
            <br />
            <p className={styles.pc}><span>LOCATION:</span> Nigeria</p>
            <p className={styles.pc}><span>EMAIL:</span> dinakajoy@gmail.com</p>
            <p className={styles.pc}><span>PHONE:</span> +234 (816) 452-2710</p>
          </div>
        </div>
        <div className="clr"></div>
      </div>
    </section>
  )
}

export default Contact;
