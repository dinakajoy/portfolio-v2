const Footer = () => {
  const YEAR = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <p>
            Designed &amp; Developed By Odinaka Joy © <time> &nbsp;{YEAR}</time>
          </p>
          <div className="socials">
            {/* <a href="/feed.xml" target="_blank"><i className="fa fa-rss"></i></a> */}
            <a
              href="https://github.com/dinakajoy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dinakajoy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/dinakajoy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://stackoverflow.com/users/10469483/dinakajoy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-stack-overflow"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
