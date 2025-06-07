
import imageP1 from '@/assets/images/p-1.svg'
import { Col, Container, Row } from 'react-bootstrap'

const ActionBox = () => {
  return (
    <section className="section bg-light cta-pettern">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pattern-1 position-absolute">
              <img src={imageP1} alt='image' height={80} />
            </div>
            <h2 className="text-dark" style={{ lineHeight: '1.5', position: 'relative' }}>I Am Available For Freelancer.</h2>
            <p className="text-muted mb-0">Browse hundreds of job offers and find the bestsuitable position.</p>
          </Col>
          <Col lg={6} className="ml-auto">
            <div className="cta-search">
              <form className="position-relative">
                <input type="email" placeholder="Email Address" required />
                <button type="submit" className="btn btn-dark">Send Massage</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActionBox