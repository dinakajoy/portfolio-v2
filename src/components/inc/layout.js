import { useRouter } from 'next/router'
import Meta from '@/components/inc/meta'
import Snowflakes from '@/components/inc/snowflakes'
import Header from '@/components/inc/header'
import Footer from '@/components/inc/footer'

const Layout = ({ children }) => {
  const router = useRouter()
  let { pathname } = router;
  return (
    <>
      {pathname === '/' && <Meta />}
      {pathname === '/about' && <Meta title="About Me | Odinaka Joy" />}
      {pathname === '/projects' && <Meta title="Projects | Odinaka Joy" />}
      {pathname === '/talks' && <Meta title="Talks | Odinaka Joy" />}
      {pathname === '/contact' && <Meta title="Contact Me | Odinaka Joy" />}
      {pathname === '/bio' && <Meta title="Bio | Odinaka Joy" />}
      <Snowflakes />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
