import mainBg from '@/assets/images/personal/main-bg.png'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="hero-one position-relative bg-black" id="about" style={{ backgroundImage: `url(${mainBg})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
      <Container>
        <Row className="align-items-center justify-content-center py-100">
          <Col lg={7} className="text-center py-5 text-center">
          <h5 className="head-title py-4" aria-label="About Me"></h5>   
          </Col>
        </Row>
      </Container>
    </section>

  )
}

export default Hero