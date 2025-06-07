import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Resume = () => {
  return (
    <section className="section">
      <Container>
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <div className="main-timeline">
                  <div className="timeline ">
                    <Link to="" className="timeline-content">
                      <div className="timeline-icon">
                        <IconifyIcon icon='tabler-trophy' />
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
                        <IconifyIcon icon='tabler-users' />
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
                        <IconifyIcon icon='tabler-school' />
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
                        <IconifyIcon icon='tabler-building' />
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

export default Resume