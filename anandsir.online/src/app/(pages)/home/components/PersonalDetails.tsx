import { personalData } from '../data'

import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PersonalDetails = () => {
  return (
    <section className="section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="align-self-center">
            <h5 className="fs-24 text-dark fw-medium"><mark>Personal Details</mark></h5>
            <h4 className="fw-normal lh-base text-gray-700 mb-4 fs-20">It is a long established fact
              that a reader will be distracted by the readable content of a page when looking at its layout.
            </h4>
            <div className="social">
              <Link to="" className='icon github me-1'>
                <IconifyIcon icon='la:github' />
              </Link>
              <Link to="" className='icon twitter me-1'>
                <IconifyIcon icon='la:twitter' />
              </Link>
              <Link to="" className='icon google me-1'>
                <IconifyIcon icon='la:google' />
              </Link>
              <Link to="" className='icon linkedin me-1'>
                <IconifyIcon icon='la:linkedin-in' />
              </Link>
            </div>
          </Col>
          <Col lg={5} className="ms-auto align-self-center">
            <div className="mb-5 mb-lg-0">
              <p className="mb-2">
                <span className="personal-detail-title">Date of birth</span>
                <span className="personal-detail-info">06 june 1989</span>
              </p>
              <p className="mb-2">
                <span className="personal-detail-title">Spoken Langages</span>
                <span className="personal-detail-info">English - French - German</span>
              </p>
              <p className="mb-2">
                <span className="personal-detail-title">Nationality</span>
                <span className="personal-detail-info">USA</span>
              </p>
              <p className="mb-2">
                <span className="personal-detail-title">Interest</span>
                <span className="personal-detail-info">Music, Reading, journey</span>
              </p>
            </div>
          </Col>
          <Col xs={12} className="mt-5">
            <div className="d-flex flex-wrap justify-content-center  mt-4 mt-md-5">
              {
                personalData.map((item, idx) => {
                  return (
                    <div key={idx} className="mx-3 ms-sm-0 ms-sm-0 mb-3 card-bg rounded p-1 pe-3 p-md-3 pe-md-4 shadow-sm">
                      <div className="d-flex align-items-center">
                        <div className="thumb-md d-flex flex-wrap justify-content-center align-items-center">
                          <img src={item.image} alt='logos' height={34} />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0 fw-medium text-gray-700">{item.name}</h6>
                          <p className="text-muted mb-0 fs-12">{item.experience} Experience</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PersonalDetails