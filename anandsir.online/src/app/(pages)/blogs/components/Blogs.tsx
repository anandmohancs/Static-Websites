import { splitArray } from '@/utils/array'
import { blogsData, BlogsType } from '../data'

import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BlogCard = ({ date, image, name, title, userImg }: BlogsType) => {
  return (
    <Card className="shadow  mb-4 mb-4">
      <img src={image} alt='personal' className="img-fluid rounded-top" />
      <CardBody>
        <Link to="/blog-detail" className="fs-20 my-0 d-block fw-medium">{title}</Link>
        <hr className="hr-dashed" />
        <div className="d-flex justify-content-between">
          <div className="meta-box">
            <div className="media">
              <img src={userImg} alt='userImg' className="thumb-sm rounded-circle me-2 align-self-center" />
              <div className="media-body align-self-center text-truncate">
                <h6 className="m-0 fs-14">{name}</h6>
                <p className="mb-0 fs-12 text-muted">{date}</p>
              </div>
            </div>
          </div>
          <div className="align-self-center">
            <Link to="/blog-detail" className="fs-14">Read more <IconifyIcon icon='tabler:arrow-right' className="align-self-center" /></Link>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

const Blogs = () => {
  const blogs = splitArray(blogsData, 3)
  return (
    <section className="section">
      <Container>
        {
          blogs.map((chunk, idx) => (
            <Row key={idx} className="align-items-center">
              {chunk.map((item, idx) => (
                <Col lg={4} md={6} key={idx}>
                  <BlogCard {...item} />
                </Col>
              ))}
            </Row>
          ))
        }
      </Container>
    </section>
  )
}

export default Blogs