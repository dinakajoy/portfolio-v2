import Link from 'next/link'
import ActiveLink from '@/components/inc/activeLink'

const Navbar = () => {
  const openNav = () => {
    document.getElementById('myNav').style.width = '100%'
  }

  const closeNav = () => {
    document.getElementById('myNav').style.width = '0%'
  }
  return (
    <>
      <header className="header lg-nav">
        <div className="container">
          <nav className="header-wrapper">
            <div className="header__brand">
              <Link href="/" activeClassName="active">
                <img src="/images/logo.png" alt="Odinaka Joy" />
              </Link>
            </div>
            <ul className="header__links">
              <li>
                <ActiveLink href="/about" activeClassName="active">
                  <span>ABOUT</span>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/projects" activeClassName="active">
                <span>PROJECTS</span>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/talks" activeClassName="active">
                  <span>TALKS</span>
                </ActiveLink>
              </li>
              <li>
                <a href="https://dinakablog-fe-dinakajoy.vercel.app/" target="_blank">
                  <span>BLOG</span>
                </a>
              </li>
              <li>
                <ActiveLink href="/contact" activeClassName="active">
                  <span>CONTACT</span>
                </ActiveLink>
              </li>
              <li className="resume">
                <Link href="/images/dinakajoy-cv.pdf" target="_BLANK">
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <header className="header sm-nav">
        <nav className="header-wrapper">
          <div className="header__brand">
            <Link href="/">
              <span>
                <img src="/images/logo.png" alt="Odinaka Joy" />
              </span>
            </Link>
          </div>
          <div id="myNav" className="overlay">
            <a
              onClick={(e) => e.preventDefault()}
              className="closebtn"
              onClick={() => closeNav()}
            >
              &times;
            </a>
            <div className="overlay-content">
              <ActiveLink href="/about" activeClassName="active">
                <span>ABOUT</span>
              </ActiveLink>
              <ActiveLink href="/projects" activeClassName="active">
                <span>PROJECTS</span>
              </ActiveLink>
              <ActiveLink href="/talks" activeClassName="active">
                <span>TALKS</span>
              </ActiveLink>
              <a href="https://dinakablog-fe-dinakajoy.vercel.app/" target="_blank">
                BLOG
              </a>
              <ActiveLink href="/contact" activeClassName="active">
                <span>CONTACT</span>
              </ActiveLink>
              <Link href="/images/dinakajoy-cv.pdf" className="resume">
                <span target="_BLANK">Resume</span>
              </Link>
            </div>
          </div>
          <span
            className="go-right"
            style={{ fontSize: '30px', cursor: 'pointer' }}
            onClick={() => openNav()}
          >
            &#9776;
          </span>
        </nav>
      </header>
    </>
  )
}

export default Navbar
