import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { servicesData, ServicesType } from '../data'

const ServicesCard = ({ icon, description, title, variant }: ServicesType) => {
  return (
    <Card className="rounded shadow border-0">
      <CardBody className="p-4 m-2">
        <div className={`bg-${variant} d-flex justify-content-center align-items-center thumb-xl  rounded`}>
          <IconifyIcon icon={icon} className={`align-self-center svg-${variant} icon-md`} />
        </div>
        <h5 className="text-dark fs-22 fw-medium my-4">{title}</h5>
        <p className="text-muted pb-4">{description}</p>
      </CardBody>
    </Card>
  )
}

const Services = () => {
  return (
    <section className="section bg-gradient-light-white" id="services">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center position-relative">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">Services</span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3 position-relative z-i-2">Our Services</h2>
            <div className="bg-text">
              <h1 className="fw-bold p-0">Services</h1>
            </div>
            <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
              We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning .
            </p>
          </Col>
        </Row>
        <Row>
          {
            servicesData.map((item, idx) => {
              return (
                <Col lg={4} md={6} key={idx} className="mt-4 pt-2">
                  <ServicesCard {...item} />
                </Col>
              )
            })

          }
        </Row>
      </Container>
    </section>
  )
}

export default Services