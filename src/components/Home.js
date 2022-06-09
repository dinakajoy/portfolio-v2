import {useState, useEffect, useRef} from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import styles from '@/styles/home.module.css';

const Home = () => {
  const imgEl = useRef(null);
  const [currentIndex, setCurrentIndex]  = useState(0);
  const [imgs, setImgs]  = useState([]);
  const [imgNum, setImgNum]  = useState(0);

  const cycleItems = () => {
    for(let a=0; a < imgNum; a++) {
      if(a === currentIndex) {
        imgs[a].style.display = 'block';
      } else {
        imgs[a].style.display = 'none';
      }
    }
  }

  useEffect(() => {
    let items = imgEl.current.children;
    let itemAmt = imgEl.current.children.length;
    setImgs(items);
    setImgNum(itemAmt);

    const interval = setInterval(() => {
      if(currentIndex === imgNum - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex => currentIndex + 1);
      }
      cycleItems();
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const variants = [
    {
      hidden: {
        scale: .8,
        opacity: 0,
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: .2
        }
      },
    },
    {
      hidden: {
        scale: .8,
        opacity: 0,
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: .4
        }
      },
    },
    {
      hidden: {
        scale: .5,
        opacity: 0,
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: .6
        }
      },
    }
  ]
  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.showcase__content}>
          <div className={styles.showcase__text}>
            <div className={styles.sm__title}>Hi 👋 I am</div>
            <motion.h1 initial="hidden" animate="visible" variants={variants[0]}>ODINAKA JOY</motion.h1>
            <motion.h2 initial="hidden" animate="visible" variants={variants[1]} className={styles.title2}>I build for the web</motion.h2>
            <hr className="short" />
            <motion.p initial="hidden" animate="visible" variants={variants[2]}>I'm a Software Engineer specialized in designing and developing exceptional websites and web applications.</motion.p>
            <motion.p initial="hidden" animate="visible" variants={variants[2]}>Need pictures or my bio for a feature or speaker graphics? <Link href="/bio"><a>Click Here</a></Link></motion.p>
            <Link href="/contact"><a className={styles.showcase__btn}>Get In Touch</a></Link>
          </div>
          <div className={styles.showcase__img} ref={imgEl}>
            <div className={styles.showcase_slider}>
              <img src="/images/dinakajoy-a.png" alt="Odinaka Joy"/>
            </div>
            <div className={styles.showcase_slider_circle}>
              <img src="/images/dinakajoy-d.png" alt="Odinaka Joy" />
            </div>
            <div>
              <img src="/images/dinakajoy-c.png" alt="Odinaka Joy" />
            </div>
            <div>
              <img src="/images/dinakajoy-b.png" alt="Odinaka Joy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;
