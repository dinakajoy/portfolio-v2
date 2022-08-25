import styles from '@/styles/about.module.css'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={`container ${styles.aboutus}`}>
        <div className={styles.left}>
          <h2>ABOUT ME</h2>
          <p>
            I am Odinaka Joy, a Software Engineer based in Port Harcourt, Nigeria. I love to build websites and infrastructures. I mentor beginners in web development. I also love to speak about tech, open source, software engineering and web development. I am passionate about tech, the developer community, open source and I drive the inclusion of more women and kids in tech.
          </p>
          <p>
            I am currently a Software Engineer at AcceleratorApp, working with the AcceleratorApp team to make the Startup industry more connected, efficient, transparent and fair . I Previously worked as an Intern Software Engineer at Tarides, where I worked on a project that ports a primarily Unix-based application (Irmin-server) to work in the browser and design interfaces for people to interact with the store (Irmin-stores).
          </p>
          <p>
            I have a <a href="https://www.dinakablog.com/" target="_BLANK">blog</a> and <a href="https://www.youtube.com/channel/UCJYAfustyfdE7YyEHRC0rWw" target="_BLANK">YouTube channel</a>, where I post content on Open Source, Software Engineering, Web Development, Career Growth and Life as a Software Engineer. 
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.tools}>
            <h3>
              <i className="fa fa-wrench"></i> Skills
            </h3>
            <p>Front-End</p>
            <span>HTML</span>
            <span>CSS/SCSS</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>ReactJS</span>
            <span>GatsbyJS</span>
            <span>NextJS</span>
            <span>Material-UI</span>
            <span>TailwindCSS</span>

            <p>Back-End</p>
            <span>TypeScript</span>
            <span>NodeJS</span>
            <span>ExpressJS</span>
            <span>OCaml</span>

            <p>Data Storage</p>
            <span>Redis</span>
            <span>MySQL</span>
            <span>PostgresSQL</span>
            <span>MongoDB</span>

            <p>Tools/Platforms</p>
            <span>ReactBricks</span>
            <span>WordPress</span>
            <span>StrapiCMS</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
