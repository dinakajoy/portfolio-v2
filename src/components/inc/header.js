import Link from 'next/link';
import ActiveLink from '@/components/inc/activeLink';

const Navbar = () => {
  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  }

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  }
  return (
    <>
      <header className="header lg-nav">
        <div className="container">
          <nav className="header-wrapper">
            <div className="header__brand"><Link href="/" activeClassName="active"><a><img src="/images/logo.png" alt="Odinaka Joy" /></a></Link></div>
            <ul className="header__links">
              <li><ActiveLink href="/about" activeClassName="active"><a>ABOUT</a></ActiveLink></li>
              <li><ActiveLink href="/projects" activeClassName="active"><a>PROJECTS</a></ActiveLink></li>
              <li><ActiveLink href="/talks" activeClassName="active"><a>TALKS</a></ActiveLink></li>
              <li><ActiveLink href="/bio" activeClassName="active"><a>BIO</a></ActiveLink></li>
              {/* <li><ActiveLink href="/blog" activeClassName="active"><a>BLOG</a></ActiveLink></li> */}
              <li><ActiveLink href="/contact" activeClassName="active"><a>CONTACT</a></ActiveLink></li>
              <li className="resume"><Link href="/images/dinakajoy-cv.pdf"><a target="_BLANK">Resume</a></Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <header className="header sm-nav">
        <nav className="header-wrapper">
          <div className="header__brand"><Link href="/"><a><img src="/images/logo.png" alt="Odinaka Joy" /></a></Link></div>
          <div id="myNav" className="overlay">
            <a onClick={(e) => e.preventDefault()} className="closebtn" onClick={() => closeNav()}>&times;</a>
            <div className="overlay-content">
              <ActiveLink href="/about" activeClassName="active"><a>ABOUT</a></ActiveLink>
              <ActiveLink href="/projects" activeClassName="active"><a>PROJECTS</a></ActiveLink>
              <ActiveLink href="/talks" activeClassName="active"><a>TALKS</a></ActiveLink>
              <ActiveLink href="/bio" activeClassName="active"><a>BIO</a></ActiveLink>
              {/* <ActiveLink href="/blog"><a>BLOG</a></ActiveLink> */}
              <ActiveLink href="/contact" activeClassName="active"><a>CONTACT</a></ActiveLink>
              <Link href="/images/dinakajoy-cv.pdf" className="resume"><a target="_BLANK">Resume</a></Link>
            </div>
          </div>
          <span className="go-right" style={{fontSize:"30px",cursor:"pointer"}} onClick={() => openNav()}>&#9776;</span>
        </nav>
      </header>
    </>
  )
}

export default Navbar;
