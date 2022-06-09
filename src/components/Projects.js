import Image from 'next/image';
import styles from '@/styles/project.module.css';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className={styles.project}>
          <div className={styles.proj}>
            <div className={styles.img}><Image src="/images/projects/save-the-princess.png" alt="Save The Princess Game" width={800} height={600} /></div>
            <div className={styles.details}>
              <h2><a href="https://save-the-princess.netlify.app/" target="_blank" rel="noopener noreferrer">Save The Princess Game</a></h2>
              <p>This is a simple game built with React that allows users to enter the size of the board and then auto generate a grid with the player and obstacles to defeat in order to win. I learnt quite a lot building this project especially the ability to make it work on mobile as arrow keys can not be found on some mobile phone's keyboard</p>
              <div className={styles.tools}>
                <span>CSS</span><span>React</span>
              </div>
              <div className={styles.links}>
                <span><a href="https://github.com/dinakajoy/save-the-princess-game" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></span>

                <span><a href="https://save-the-princess.netlify.app/" target="_blank" rel="noopener noreferrer"><i className="fa fa-link"></i></a></span>
              </div>
            </div>
          </div>

          <div className={styles.proj}>
            <div className={styles.img}><Image src="/images/projects/mini-netflix.png" alt="Mini-Netflix" width={800} height={600} /></div>
            <div className={styles.details}>
              <h2><a href="https://mini-netflix-app.netlify.app/" target="_blank" rel="noopener noreferrer">Mini-Netflix</a></h2>
              <p>A Movie App built using React and TypeScript, where users can view recent movies and add or remove favourite movies if registered and logged in. It consumes a REST API designed with Express and JWT.
              </p>
              <div className={styles.tools}>
                <span>CSS</span><span>TypeScript</span><span>React</span><span>Node/Express</span><span>MongoDB</span><span>REST API</span><span>TDD</span>
              </div>
              <div className={styles.links}>
                <span><a href="https://github.com/dinakajoy/mini-netflix-movie-app" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></span>

                <span><a href="https://mini-netflix-app.netlify.app/" target="_blank" rel="noopener noreferrer"><i className="fa fa-link"></i></a></span>
              </div>
            </div>
          </div>

          <div className={styles.proj}>
            <div className={styles.img}><Image src="/images/projects/mini-marvel.png" alt="Mini-Marvel"  width={800} height={600} /></div>
            <div className={styles.details}>
              <h2><a href="https://mini-marvel.netlify.app/" target="_blank" rel="noopener noreferrer">Mini-Marvel</a></h2>
              <p>This is a clone of <a href="https://www.marvel.com/characters/captain-marvel-carol-danvers" target="_BLANK">Marvel's Page </a>with the 'Connections Section' replaced with 'Captain Marvels Comics'. I learnt a lot building this project like Lazy Loading, Infinite Scrolling, consuming Third Party API, amongst others.</p>
              <p>Main Screens: Home Page, Comics Page, Comics Issues Page and Comics Detail Page</p>
              <div className={styles.tools}>
                <span>CSS</span><span>React</span><span>Marvel API</span>
              </div>
              <div className={styles.links}>
                <span><a href="https://github.com/dinakajoy/mini-marvel" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></span>

                <span><a href="https://mini-marvel.netlify.app/" target="_blank" rel="noopener noreferrer"><i className="fa fa-link"></i></a></span>
              </div>
            </div>
          </div>

          <div className={styles.proj}>
            <div className={styles.img}><Image src="/images/projects/github-profile.png" alt="Github-Profile"  width={800} height={600} /></div>
            <div className={styles.details}>
              <h2><a href="https://github-profile-app-by-joy.netlify.app/" target="_blank" rel="noopener noreferrer">Github-Profile</a></h2>
              <p>This is a simple application where users can create card list of registered users on github. It consumes Github's API. This is my first React application and since we mostly keep our front-end separate from the logics and only allow communication between app user interface and logics via API, I decided to build on that skill since that is what most of the tasks entails.</p>
              <div className={styles.tools}>
                <span>CSS</span><span>React</span><span>Github API</span><span>ChartJS</span>
              </div>
              <div className={styles.links}>
                <span><a href="https://github.com/dinakajoy/github_profile_app" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></span>

                <span><a href="https://github-profile-app-by-joy.netlify.app/" target="_blank" rel="noopener noreferrer"><i className="fa fa-link"></i></a></span>
              </div>
            </div>
          </div>

          <div className={styles.proj}>
            <div className={styles.img}><Image src="/images/projects/credit-card-validation.png" alt="Credit Card Validation"  width={800} height={600} /></div>
            <div className={styles.details}>
              <h2><a href="https://my-creditcard-project.netlify.com/" target="_blank" rel="noopener noreferrer">Credit Card Validation</a></h2>
              <p>This is a simple E-Commerce application that validates users credit cards after selecting an item from the list of products. It does not process the payment, just validates your credit card. This was one of my first core JavaScript project and I learnt a lot building it.</p>
              <div className={styles.tools}>
                <span>HTML</span><span>SCSS</span><span>TypeScript</span><span>IndexedDB</span><span>Webpack</span>
              </div>
              <div className={styles.links}>
                <span><a href="https://github.com/dinakajoy/Credit_Card_Validation" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></span>

                <span><a href="https://my-creditcard-project.netlify.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-link"></i></a></span>
              </div>
            </div>
          </div>

          <div className={styles.proj}>
            <div className={styles.img}><Image src="/images/projects/acme-company.png" alt="ACME Company Demo Website" width={800} height={600} /></div>
            <div className={styles.details}>
              <h2><a href="https://dinakajoy.github.io/simple_company_portfolio_demo/" target="_blank" rel="noopener noreferrer">ACME Company Demo Website</a></h2>
              <p>Every company needs an online presence that will not only tell their story, vision and mission as an organization but also tell their customers how to reach them. This reason was what inspired me to build this demo project, to mimick the kind of solutions I look forward to helping organizations and individuals solve. This is just for demo purposes and a real one will go with more work and animation but I think this can serve to tell the story that I CAN DO IT.</p>
              <div className={styles.tools}>
                <span>HTML</span><span>SCSS</span><span>Webpack</span><span>Node/Express</span>
              </div>
              <div className={styles.links}>
                <span><a href="https://github.com/dinakajoy/acme-company-website" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></span>

                <span><a href="https://acme-company-by-joy.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-link"></i></a></span>
              </div>
            </div>
          </div>

          <div className={styles.proj}>
            <div className={styles.img}><Image src="/images/projects/pixel-art-maker.png" alt="Pixel Art Maker" width={800} height={600} /></div>
            <div className={styles.details}>
              <h2><a href="https://dinakajoy.github.io/pixel-art-maker-app/" target="_blank" rel="noopener noreferrer">Pixel Art Maker</a></h2>
              <p>An application that dynamically creates a grid that users can interact with and create awesome colored grid patterns. Let's call it a Game App &#128515; where one can create beautiful and colorful grids or patterns</p>
              <div className={styles.tools}>
                <span>HTML</span><span>CSS</span><span>JavaScript</span>
              </div>
              <div className={styles.links}>
                <span><a href="https://github.com/dinakajoy/pixel-art-maker-app" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></span>

                <span><a href="https://dinakajoy.github.io/pixel-art-maker-app/" target="_blank" rel="noopener noreferrer"><i className="fa fa-link"></i></a></span>
              </div>
            </div>
          </div>

          <div className={styles.proj}>
            <div className={styles.img}><Image src="/images/projects/news-app.png" alt="News App" width={800} height={600} /></div>
            <div className={styles.details}>
              <h2><a href="https://dinakajoy.github.io/news-app/" target="_blank" rel="noopener noreferrer">News App</a></h2>
              <p>A news app where you can read up latest news on different topics such as technology, health, science, etc. This application consumes TheGuardian's API. Most organizations needs input from other organization on their website and an easy way to achieve this is via their API. This inspired me to build this application. I took the news feed from TheGuardian and make up my news content rather than sourcing for news. &#128523;</p>
              <div className={styles.tools}>
                <span>HTML</span><span>CSS</span><span>JavaScript</span><span>The Guardian API</span><span>PWA</span>
              </div>
              <div className={styles.links}>
                <span><a href="https://github.com/dinakajoy/news-app" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></span>

                <span><a href="https://dinakajoy.github.io/news-app/" target="_blank" rel="noopener noreferrer"><i className="fa fa-link"></i></a></span>
              </div>
            </div>
          </div>

          <div className={styles.proj}>
            <div className={styles.img}><Image src="/images/projects/lancerfree.png" alt="LancerFree" width={800} height={600} /></div>
            <div className={styles.details}>
              <h2><a href="https://dinakajoy.github.io/lancerfree/" target="_blank" rel="noopener noreferrer">LancerFree</a></h2>
              <p>This is a clone of freelancer.com website called LancerFree. What inspired me to work on this project is the fact that most clients' request are usually to build a website smilar to another. Maybe not in only UI designs but layout and functionality. This is for me to see how well I can create a copy of another website from scratch. *Disclaimer*: I only focused on the look here, the functionalities are not covered &#128521;</p>
              <div className={styles.tools}>
                <span>HTML</span><span>CSS</span>
              </div>
              <div className={styles.links}>
                <span><a href="https://github.com/dinakajoy/lancerfree" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></span>

                <span><a href="https://dinakajoy.github.io/lancerfree/" target="_blank" rel="noopener noreferrer"><i className="fa fa-link"></i></a></span>
              </div>
            </div>
          </div>

          <div className={styles.proj}>
            <div className={styles.img}><Image src="/images/projects/todo-app.png" alt="DOM Fun App" width={800} height={600} /></div>
            <div className={styles.details}>
              <h2><a href="https://dinakajoy.github.io/ToDo-app/" target="_blank" rel="noopener noreferrer">ToDo App</a></h2>
              <p>This is an application that shows how to manipulate the DOM. It is a todo app where a user can add todo, remove todo and search lists of todos. Have fun while interacting with the elements. This project helped me a lot to learn how to manipulate the DOM with plain JavaScript.</p>
              <div className={styles.tools}>
                <span>HTML</span><span>CSS</span><span>JavaScript</span>
              </div>
              <div className={styles.links}>
                <span><a href="https://github.com/dinakajoy/ToDo-app" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></span>

                <span><a href="https://dinakajoy.github.io/ToDo-app/" target="_blank" rel="noopener noreferrer"><i className="fa fa-link"></i></a></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects;
