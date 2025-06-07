import logoDark from '@/assets/images/logo-dark.png'
import logoLight from '@/assets/images/logo-light.png'
import logoSm from '@/assets/images/logo-sm.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import useScrollEvent from '@/hooks/useScrollEvent'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const TopNavbar = ({ isDark }: { isDark?: boolean }) => {
  const [open, setOpen] = useState<boolean>(false)

  const { scrollY } = useScrollEvent()

  const {pathname} = useLocation()

  const toggleMenu = () => {
    setOpen(!open)
  }


  return (
    <nav className={`navbar navbar-expand-lg fixed-top sticky ${isDark && 'light-active'} ${scrollY > 80 && 'nav-sticky'}`} id="navbar">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={logoSm} className="logo-sm" alt='logoSm' height={24} />&nbsp;
          <img src={logoLight} className="logo-light" alt='logoLight' height={16} />&nbsp;
          <img src={logoDark} className="logo-dark" alt='logoDark' height={16} />
        </Link>
        <Link to="" onClick={toggleMenu} className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggle-icon"><IconifyIcon width={24} height={24} icon='feather:menu' /></span>
        </Link>
        <div className={`collapse navbar-collapse ${open && 'show'}`} id="navbarNav">
          <div className="navbar-nav mx-auto navbar-center mt-lg-0 mt-2">
            <li className="nav-item">
              <a href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</a>
            </li>
            <li className="nav-item">
              <a href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</a>
            </li>
            <li className="nav-item">
              <a href="/services" className={`nav-link ${pathname === '/services' ? 'active' : ''}`}>Services</a>
            </li>
            <li className="nav-item">
              <a href="/resume" className={`nav-link ${pathname === '/resume' ? 'active' : ''}`}>Resume</a>
            </li>
            <li className="nav-item">
              <a href="/projects" className={`nav-link ${pathname === '/projects' ? 'active' : ''}`}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="/blogs" className={`nav-link ${pathname === '/blogs' ? 'active' : ''}`}>Blogs</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</a>
            </li>
          </div>
          <Link to="" className="btn btn-sm nav-btn text-primary mb-4 mb-lg-0">
            Hire Me! <IconifyIcon icon='feather:chevrons-right' className="icon-xxs ms-1" />
          </Link>
        </div>
      </Container>
    </nav>
  )
}

export default TopNavbar
