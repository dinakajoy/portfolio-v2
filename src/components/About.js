import styles from '@/styles/about.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={`container ${styles.aboutus}`}>
        <div className={styles.left}>
          <h2>ABOUT ME</h2>
          <p>
            I am Odinaka Joy. A smart-working Software Engineer with a flair
            for creating elegant and quality solutions in the possible least
            amount of time. I mentor beginners in web development and speak on
            web related topics and technologies. I specialize in
            full-stack web development using JavaScript. I can plan Software Architecture and design it,
            choosing the best Software Architectural Pattern(s).
          </p>

          <p>
            Aside coding, I also have basic knowledge of Project Management
            (Agile, Waterfall), DevOps (Github Actions, Docker, Terraform, Ansible), Cloud
            Services(AWS) and End to End Testing (Cypress). This is to
            enable me understand the processes involved in building out a product from just an idea to a usable application.{' '}
          </p>

          <p>
            I strive to follow best practices and use industry-standard tools, including Git-Flow, Test Driven Development, Continous Integration (Github Action), Linting (ESLint), Code Formatting (Prettier), Package Management (NPM) and Build Tool (Webpack).
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.tools}>
            <h3>
              <i className="fa fa-wrench"></i> Skills
            </h3>
            <p>Front-End</p>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>SCSS</span>
            <span>JavaScript (ES6+)</span>
            <span>TypeScript</span>
            <span>ReactJS</span>
            <span>NextJS</span>
            <span>Jest</span>
            <span>React Testing Library</span>

            <p>Back-End</p>
            <span>TypeScript</span>
            <span>NodeJS</span>
            <span>ExpressJS</span>
            <span>Jest</span>

            <p>Databases</p>
            <span>MySQL</span>
            <span>PostgresSQL</span>
            <span>MongoDB</span>

            <p>Others</p>
            <span>Wordpress</span>
            <span>Redis</span>
            <span>RabbitMQ</span>
            <span>Elastic Search</span>
            <span>AWS</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
