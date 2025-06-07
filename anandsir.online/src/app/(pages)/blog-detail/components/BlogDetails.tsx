
import personal1 from '@/assets/images/personal/1.jpg'
import personal3 from '@/assets/images/personal/3.jpg'
import personal4 from '@/assets/images/personal/4.jpg'
import personal5 from '@/assets/images/personal/5.jpg'
import personal6 from '@/assets/images/personal/6.jpg'
import userImg1 from '@/assets/images/users/user-1.jpg'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BlogDetails = () => {
  return (
    <section className="section">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col lg={9}>
            <Card className="border-0 shadow-none">
              <CardBody>
                <div className="mb-5 text-center">
                  <p className="text-muted fw-semibold fs-18">26 march 2022</p>
                  <h3 className="my-3 fs-28 d-block fw-medium text-dark">Best NFT wallets for storing and trading NFTs</h3>
                  <p className="text-muted fw-semibold fs-16">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                  <span className="badge px-3 py-2 bg-light text-dark fw-semibold mt-3 fs-13">Minting</span>&nbsp;
                  <span className="badge px-3 py-2 bg-light text-dark fw-semibold mt-3 fs-13">NFTs</span>&nbsp;
                  <span className="badge px-3 py-2 bg-light text-dark fw-semibold mt-3 fs-13">Art</span>&nbsp;
                  <span className="badge px-3 py-2 bg-light text-dark fw-semibold mt-3 fs-13">Music</span>&nbsp;
                </div>
                <img src={personal1} alt='personal1' className="img-fluid rounded d-flex mx-auto" />
                <div className="my-5">
                  <p className="text-muted fs-16 mb-4">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here',
                    making it look like readable English.
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here',
                    making it look like readable English.
                  </p>
                  <figure>
                    <blockquote className="blockquote">
                      <p><i>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                        in some form. </i></p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
                  </figure>
                  <p className="text-muted fs-16">
                    It uses a dictionary of over 200 Latin words, combined with a
                    handful of model sentence structures, to generate Lorem Ipsum which
                    looks reasonable.
                  </p>
                </div>
                <div className="mb-5">
                  <h3 className="mt-3 fs-24 d-block fw-medium text-dark">Latest Blog Posts</h3>
                  <p className="text-muted fw-semibold fs-14">26 march 2022</p>
                  <Row>
                    <Col xs={12}>
                      <Row className="row-cols-xl-4 row-cols-lg-4 row-cols-md-2 g-3 justify-content-center">
                        <Col>
                          <Link to="" className="d-block bg-card shadow p-2 rounded catagories-box">
                            <img src={personal6} alt='personal' className="img-fluid rounded mb-2" />
                            <h3 className="fs-15 m-0 fw-medium">It is a long established...</h3>
                          </Link>
                        </Col>
                        <Col>
                          <Link to="" className="d-block bg-card shadow p-2 rounded catagories-box">
                            <img src={personal3} alt='personal' className="img-fluid rounded mb-2" />
                            <h3 className="fs-15 m-0 fw-medium">There are many variations...</h3>
                          </Link>
                        </Col>
                        <Col>
                          <Link to="" className="d-block bg-card shadow p-2 rounded catagories-box">
                            <img src={personal4} alt='personal' className="img-fluid rounded mb-2" />
                            <h3 className="fs-15 m-0 fw-medium">Contrary to popular belief...</h3>
                          </Link>
                        </Col>
                        <Col>
                          <Link to="" className="d-block bg-card shadow p-2 rounded catagories-box">
                            <img src={personal5} alt='personal' className="img-fluid rounded mb-2" />
                            <h3 className="fs-15 m-0 fw-medium">Finibus Bonorum et Malorum...</h3>
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <hr className="hr-dashed my-3" />
                  <Row>
                    <div className="col-md">
                      <div className="media">
                        <img src={userImg1} alt='userImg1' className="thumb-sm rounded-circle me-2" />
                        <div className="media-body align-self-center text-truncate">
                          <h6 className="m-0 text-dark fw-medium">Donald Gardner</h6>
                          <p className="mb-0 fs-12 text-muted fw-medium">Cryptocurrency Analyst</p>
                        </div>
                      </div>
                    </div>
                    <Col md={'auto'}>
                      <button type="button" className="btn btn-sm btn-outline-primary px-4">Blogs</button>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BlogDetails