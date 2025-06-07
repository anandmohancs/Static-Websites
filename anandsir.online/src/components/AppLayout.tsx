import logoLight from '@/assets/images/logo-light.png'
import logoSm from '@/assets/images/logo-sm.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { currentYear } from '@/context/constants'
import { ReactNode } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AppLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {

  return (
    <>
      {children}
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={5} className="border-e-dashed">
              <Link to="/">
                <img src={logoSm} alt='logoSm' height={18} />
                <img src={logoLight} alt='logoLight' height={16} />
              </Link>
              <p className="my-4">In an ideal world this text wouldn’t exist,
                a client would acknowledge the importance of having web
                copy before the design starts.
              </p>
              <ul className="list-unstyled footer-social mb-0 mt-sm-0 mt-3">
                <li className="list-inline-item">
                  <Link to=""> <IconifyIcon icon='feather:facebook' className="icon-xs" /> </Link>&nbsp;
                </li>
                <li className="list-inline-item">
                  <Link to=""> <IconifyIcon icon='feather:twitter' className="icon-xs" /> </Link>&nbsp;
                </li>
                <li className="list-inline-item">
                  <Link to=""> <IconifyIcon icon='feather:github' className="icon-xs" /> </Link>&nbsp;
                </li>
                <li className="list-inline-item">
                  <Link to=""> <IconifyIcon icon='feather:instagram' className="icon-xs" /> </Link>
                </li>
              </ul>
            </Col>
            <Col lg={6} className="offset-lg-1">
              <Row>
                <Col md={4}>
                  <h6 className="text-footer mb-4 mt-sm-0 mt-5">Company</h6>
                  <ul className="list-unstyled footer-list">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">services</Link></li>
                  </ul>
                </Col>
                <Col md={4}>
                  <h6 className="text-footer mb-4 mt-sm-0 mt-4">Information</h6>
                  <ul className="list-unstyled footer-list">
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/">Client Say</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                  </ul>
                </Col>
                <Col md={4}>
                  <h6 className="text-footer mb-4 mt-sm-0 mt-4">More info</h6>
                  <ul className="list-unstyled footer-list">
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/">Terms &amp; condition</Link></li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="footer-alt">
        <Container>
          <Row>
            <Col sm={6}>
              <p> © {currentYear} Selfown. Created with <IconifyIcon icon="la:heart-solid" className="text-danger" /> by Mannatthemes</p>
            </Col>
            <Col sm={6} className="text-sm-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a href="#">- Terms &amp; condition<sup className="text-danger">*</sup></a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>

  )
}

export default AppLayout