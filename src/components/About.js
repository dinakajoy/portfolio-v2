import styles from '@/styles/about.module.css'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={`container ${styles.aboutus}`}>
        <div className={styles.left}>
          <h2>ABOUT ME</h2>
          <p>
            A Software Engineer with {new Date().getFullYear() - 2018} years of
            professional experience. Able to take a project from design to product, using the best tools and architectures based on the application needs. Basic knowledge of project and people management, being a freelancer and having led the completion of two projects (an ERP and an e-learning system) from start to finish. Passionate about coding, open source and education. Confident,
            curious and adaptable.
          </p>
          <p>
            Currently a Software Engineer at <a href="https://www.acceleratorapp.co" target="_BLANK" no-follow referrerpolicy="no-referrer">AcceleratorApp</a>, working with the
            AcceleratorApp team to make the Startup industry more connected,
            efficient, transparent and fair. A platform that seamlessly connects
            accelerators, incubators and founders to automate, organize, track,
            and boost value to their startups with features like Multilingual,
            Scheduling tools, Smart tasks, Email tracking, Coaching and
            Mentorship, Drag and drop customizable forms, Automated emails,
            Calendar integration, Zapier integration, Learning Management
            System, Chat and more.
          </p>
          {/* <p>
            I have a{' '}
            <a href="https://www.dinakablog.com/" target="_BLANK">
              blog
            </a>{' '}
            and{' '}
            <a
              href="https://www.youtube.com/channel/UCJYAfustyfdE7YyEHRC0rWw"
              target="_BLANK"
            >
              YouTube channel
            </a>
            , where I post content on Open Source, Software Engineering, Web
            Development, Career Growth and Life as a Software Engineer.
          </p> */}
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
            <span>React.js</span>
            <span>Next.js</span>
            <span>Material-UI</span>
            <span>TailwindCSS</span>

            <p>Back-End</p>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>OCaml</span>

            <p>Data Storage</p>
            <span>Redis</span>
            <span>MySQL</span>
            <span>PostgreSQL</span>
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
