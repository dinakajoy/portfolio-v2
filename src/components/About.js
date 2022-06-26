import styles from '@/styles/about.module.css'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={`container ${styles.aboutus}`}>
        <div className={styles.left}>
          <h2>ABOUT ME</h2>
          <p>
            I am Odinaka Joy, a Software Engineer based in Port Harcourt, Nigeria. I love to build websites and infrastructures. I mentor and train beginners in web development. I also speak about tech, open source, software engineering and web development. I am passionate about tech, the developer community, open source and I drive the inclusion for more women and kids in tech.
          </p>
          <p>
            I currently work as an Intern Software Engineer at Tarides, working on a project that ports a primarily Unix-based application (Irmin-server) to work in the browser and design interfaces for people to interact with the store (Irmin-stores).
          </p>
          <p>
            I have a <a href="https://www.dinakablog.com/" target="_BLANK">blog</a> and <a href="https://www.youtube.com/channel/UCJYAfustyfdE7YyEHRC0rWw" target="_BLANK">YouTube channel</a>, where I post content on Software Engineering, Career Growth and Life as a Software Engineer. 
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.tools}>
            <h3>
              <i className="fa fa-wrench"></i> Skills
            </h3>
            <p>Front-End</p>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>ReactJS</span>
            <span>NextJS</span>
            <span>ReScript</span>
            <span>TailwindCSS</span>

            <p>Back-End</p>
            <span>TypeScript</span>
            <span>ExpressJS</span>
            <span>OCaml</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
