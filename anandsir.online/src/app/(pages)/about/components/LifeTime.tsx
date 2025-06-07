import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LifeTime = () => {
  return (
    <section className="section">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">Life Time</span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3 position-relative z-i-2">Education &amp; Experience</h2>
            <div className="bg-text">
              <h1 className="fw-bold p-0">Resume</h1>
            </div>
            <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
              We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning .
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <div className="main-timeline">
                  <div className="timeline">
                    <Link to="" className="timeline-content">
                      <div className="timeline-icon">
                        <IconifyIcon icon='tabler:trophy' />
                      </div>
                      <div className="inner-content">
                        <h3 className="title">GHI Themes - Web &amp; App IT Company</h3>
                        <p className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo
                        </p>
                      </div>
                      <div className="timeline-year"><span>2019-22</span></div>
                    </Link>
                  </div>
                  <div className="timeline">
                    <Link to="" className="timeline-content">
                      <div className="timeline-icon">
                        <IconifyIcon icon='tabler:users' />
                      </div>
                      <div className="inner-content">
                        <h3 className="title">ABC themes - Web Design IT Company</h3>
                        <p className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo
                        </p>
                      </div>
                      <div className="timeline-year"><span>2014-18</span></div>
                    </Link>
                  </div>
                  <div className="timeline">
                    <Link to="" className="timeline-content">
                      <div className="timeline-icon">
                        <IconifyIcon icon='tabler:school' />
                      </div>
                      <div className="inner-content">
                        <h3 className="title">MSc IT Master Degree</h3>
                        <p className="description">
                          Harvard University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.
                        </p>
                      </div>
                      <div className="timeline-year"><span>2012-13</span></div>
                    </Link>
                  </div>
                  <div className="timeline">
                    <Link to="" className="timeline-content">
                      <div className="timeline-icon">
                        <IconifyIcon icon='tabler:building' />
                      </div>
                      <div className="inner-content">
                        <h3 className="title">High / Higher secondary school</h3>
                        <p className="description">
                          Princeton University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.
                        </p>
                      </div>
                      <div className="timeline-year"><span>2007-08</span></div>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default LifeTime