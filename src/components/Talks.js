import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/talks.module.css';

const Talks = () => {
  return (
    <section id="talks" className={styles.talks}>
      <div className="container">
        <div className={styles.talk}>
          <p className={styles.big}>I am open to speak on topics related to web and technology in general and also building career in tech. As someone who has been through ups and downs in my tech journey, I can demystify these topics very well. Need pictures or my bio for a feature or speaker graphics? <Link href="/bio"><a>click here</a></Link>
          </p>
          <div className={styles.tk}>
            <div className={styles.img}><Image src="/images/talks/sca_ph.jpg" alt="Introduction To Web Development" width={350} height={350} className={styles.tkimg} /></div>
            <div className={styles.details}>
              <h3>Introduction To Web Development</h3>
              <p>In this event, I spoke on how to get started as a web developer, tech stack and frameworks to choose. Below are links to the slides.</p>
              <br />
              <div className={styles.links}>
                <span><a href="https://docs.google.com/presentation/d/13vneDAV6Z5z2WTnF9K5EvnLucN7DYEfkSbJ125g9hmY/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fa fa-link"></i></a></span>
              </div>
            </div>
          </div>
          <div className={styles.tk}>
            <div className={styles.img}><Image src="/images/talks/i4g_lasu.jpg" alt="Road Map To Becoming A Full Stack Web Developer" width={350} height={350} className={styles.tkimg} /></div>
            <div className={styles.details}>
              <h3>The Road Map To Becoming A Full Stack Web Developer</h3>
              <p>In this event, I spoke on the road map to become not just a successful web developer but also an employable web developer. Below are links to the slides.</p>
              <br />
              <div className={styles.links}>
                <span><a href="https://docs.google.com/presentation/d/1-4gOs-Yf1OXtr3xqb3DyQ5P9zPTg904CFDCKwQywn6U/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fa fa-link"></i></a></span>
              </div>
            </div>
          </div>
          <div className={styles.tk}>
            <div className={styles.img}><Image src="/images/talks/dsc_oyueke.jpg" alt="Achieving Career Growth" width={350} height={350} className={styles.tkimg} /></div>
            <div className={styles.details}>
              <h3>Achieving Career Growth</h3>
              <p>In this event, I spoke on Career Growth - mentorship,  open source, voluntary service. Below are links to the slides.</p>
              <br />
              <div className={styles.links}>
                <span><a href="https://docs.google.com/presentation/d/1XLe4-YSKVdhHhjueonxp3Mc4obSZVovx90Bll2XPcnY/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fa fa-link"></i></a></span>
              </div>
            </div>
          </div>
          <div className={styles.tk}>
            <div className={styles.img}><Image src="/images/talks/talk_one.jpg" alt="Web &amp; Programming" width={350} height={350} className={styles.tkimg} /></div>
            <div className={styles.details}>
              <h3>The Web and Programming</h3>
              <p>In this event, I spoke on understanding the web, web architecture and programming. Below are links to the slides.</p>
              <br />
              <div className={styles.links}>
                <span><a href="https://t.co/pNvJ84l8iI?amp=1" target="_blank" rel="noopener noreferrer"><i className="fa fa-link"></i></a></span>
                <span><a href="https://t.co/wA6IeKhojT?amp=1" target="_blank" rel="noopener noreferrer"><i className="fa fa-link"></i></a></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Talks
