
import personal1 from '@/assets/images/personal/1.png';
import mainBg from '@/assets/images/personal/main-bg.png';

import { Button, Col, Container, Row } from 'react-bootstrap';
import Typist from 'react-text-typist';

const Hero = () => {
  return (
    <section className="hero-one position-relative main-bg" id="home" style={{ backgroundImage: `url(${mainBg})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={5} className="mx-auto mt-5">
            <img src={personal1} alt='personal' className="img-fluid ml-lg-5" />
          </Col>
          <Col lg={7} className="text-center px-0 px-xl-4 mt-5 mt-lg-0 pt-5 pt-lg-0">
            <h5 className="d-inline-block py-1 px-3 rounded text-muted font-secondary">Hi, I'm David Williamson</h5>
            <h1 className="hero-title mb-4 font-secondary fo">I'm a freelance <mark>  <Typist className="fw-medium typewrite" sentences={['React', 'Flutter', 'Python']} typingSpeed={1500} deletingSpeed={700} showCursor={false} startDelay={100} cursorSmooth pauseTime={2500} /></mark> Developer</h1>
            <span className="wrap" />
            <div className="mb-5 mb-lg-0">
              <div className="d-inline-block">
                <Button variant='primary'>Download CV</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero