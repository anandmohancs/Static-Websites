import jobLight from '@/assets/images/personal/job-light.png'
import job from '@/assets/images/personal/job.png'
import schoolLight from '@/assets/images/personal/school-light.png'
import school from '@/assets/images/personal/school.png'

import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const LifeTime = () => {
  return (
    <section className="section" id="resume">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">Life Time</span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3">Education &amp; Experience</h2>
            <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
              We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning .
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row className="g-0">
              <Col lg={4} md={6}>
                <Card className="rounded bg-light h-100 border-0">
                  <CardBody className="d-flex justify-content-center align-items-center">
                    <div className="mx-auto text-center">
                      <img src={school} alt='school' className="vector-dark" height={150} />
                      <img src={schoolLight} alt='schoolLight' className="vector-light" height={150} />
                      <h5 className="text-dark fs-22 fw-medium my-2">Education</h5>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={8} md={6}>
                <Card className="rounded bg-white  h-100 border-0">
                  <CardBody className="p-0">
                    <Accordion defaultActiveKey={'1'} className="accordion-flush" id="Education_accordion">
                      <AccordionItem eventKey='1'>
                        <AccordionHeader as={'h2'} id="prime">
                          MSc IT Master Degree
                          <span className="fw-medium text-primary ms-auto fs-14">2010 - 2012</span>
                        </AccordionHeader>
                        <AccordionBody className="accordion-body">
                          <p className="text-muted mb-3">Harvard University is an educational institution that offers graduate,
                            professional, and research programs
                            in the fields of and public health.
                          </p>
                          <p className="fw-medium">Harvard University, Cambridge, MA, United States</p>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey='2'>
                        <AccordionHeader as={'h2'} id="second">
                          BCA college complete course
                          <span className="fw-medium text-primary ms-auto fs-14">2007 - 2010</span>
                        </AccordionHeader>
                        <AccordionBody className="accordion-body">
                          <p className="text-muted mb-3">Columbia University is an educational institution that offers graduate,
                            professional, and research programs
                            in the fields of and public health.
                          </p>
                          <p className="fw-medium">Columbia University, New York, NY, United States</p>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey='3'>
                        <AccordionHeader as={'h2'} id="higher">
                          High / Higher secondary school
                          <span className="fw-medium text-primary ms-auto fs-14">1999 - 2007</span>
                        </AccordionHeader>
                        <AccordionBody className="accordion-body">
                          <p className="text-muted mb-3">Princeton University is an educational institution that offers graduate,
                            professional, and research programs
                            in the fields of and public health.
                          </p>
                          <p className="fw-medium">Princeton University, Princeton, NJ, United States</p>
                        </AccordionBody>
                      </AccordionItem>
                    </Accordion>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <hr className="hr-dashed" />
            <Row className="g-0">
              <Col lg={4} md={6}>
                <Card className="rounded bg-light h-100 border-0">
                  <CardBody className="d-flex justify-content-center align-items-center">
                    <div className="mx-auto text-center">
                      <img src={job} alt='job' className="vector-dark" height={150} />
                      <img src={jobLight} alt='jobLight' className="vector-light" height={150} />
                      <h5 className="text-dark fs-22 fw-medium my-2">Experience</h5>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={8} md={6}>
                <Card className="rounded bg-white  h-100 border-0">
                  <CardBody className="p-0">
                    <Accordion defaultActiveKey={'1'} className="accordion-flush" id="Experience_accordion">
                      <AccordionItem eventKey='1'>
                        <AccordionHeader id="first-co">
                          ABC themes - Web Design IT Company
                          <span className="fw-medium text-primary ms-auto fs-14">2020 - 2021</span>
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="text-muted mb-1">- Delivered quality code by applying the best development practices</p>
                          <p className="fw-medium">A-000 Chambers Street, Suite z-701 New York, NY 10007, United States</p>
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Angular</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">React</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Python</span>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey='2'>
                        <AccordionHeader id="second-co">
                          DEF Themes - Creative full stack web design &amp; development
                          <span className="fw-medium text-primary ms-auto fs-14">2016 - 2019</span>
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="text-muted mb-1">- Delivered quality code by applying the best development practices</p>
                          <p className="fw-medium">A-000 Chambers Street, Suite z-701 New York, NY 10007, United States</p>
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Laravel</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Bootstrap</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">javascript</span>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey='3'>
                        <AccordionHeader id="third-co">
                          GHI Themes - Web &amp; App IT Company
                          <span className="fw-medium text-primary ms-auto fs-14">2013 - 2015</span>
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="text-muted mb-1">- Delivered quality code by applying the best development practices</p>
                          <p className="fw-medium">A-000 Chambers Street, Suite z-701 New York, NY 10007, United States</p>
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Node.js</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Php.net</span>&nbsp;
                          <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2">Django</span>
                        </AccordionBody>
                      </AccordionItem>
                    </Accordion>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default LifeTime