import Link from 'next/link';

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
            <div className="header__brand"><Link href="/"><a><img src="/images/logo.png" alt="Odinaka Joy" /></a></Link></div>
            <ul className="header__links">
              <li><Link href="/about"><a>ABOUT</a></Link></li>
              <li><Link href="/projects"><a>PROJECTS</a></Link></li>
              <li><Link href="/talks"><a>TALKS</a></Link></li>
              <li><Link href="/blog"><a>BLOG</a></Link></li>
              <li><Link href="/contact"><a>CONTACT</a></Link></li>
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
              <Link href="/about"><a>ABOUT</a></Link>
              <Link href="/projects"><a>PROJECTS</a></Link>
              <Link href="/talks"><a>TALKS</a></Link>
              <Link href="/blog"><a>BLOG</a></Link>
              <Link href="/contact"><a>CONTACT</a></Link>
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
