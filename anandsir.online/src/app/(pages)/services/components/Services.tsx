import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { splitArray } from '@/utils/array'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { servicesData, ServicesType } from '../data'

const ServicesCard = ({ description, icon, title, variant }: ServicesType) => {
  return (
    <Card className="rounded shadow border-0">
      <CardBody className="p-4 m-2">
        <div className={`${variant} d-flex justify-content-center align-items-center thumb-xl  rounded`}>
          <IconifyIcon icon={icon} className={`align-self-center svg-${variant} icon-md`} />
        </div>
        <h5 className="text-dark fs-22 fw-medium my-4">{title}</h5>
        <p className="text-muted pb-4">{description}</p>
      </CardBody>
    </Card>
  )
}

const Services = () => {
  const services = splitArray(servicesData, 3)
  return (
    <section className="section bg-gradient-light-white">
      <Container>
        {
          services.map((chunk, idx) => (
            <Row key={idx}>
              {
                chunk.map((item, idx) => (
                  <Col lg={4} md={6} key={idx} className="mt-4 pt-2">
                    <ServicesCard {...item} />
                  </Col>
                ))
              }
            </Row>
          ))
        }
      </Container>
    </section>
  )
}

export default Services