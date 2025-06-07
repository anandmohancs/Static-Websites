
import { Fragment, useState } from 'react'
import { workData, WorkDataType } from '../data'

import clsx from 'clsx'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const WorkCard = ({ image, language, link, title, variant }: WorkDataType) => {
  return (
    <Card className="rounded shadow border-0 m-2">
      <CardBody className="p-4 m-2">
        <div className="media mb-3">
          <div className={`bg-${variant} d-flex justify-content-center align-items-center thumb-xl  rounded`}>
            <img src={image} alt='image' className="thumb-md" />
          </div>
          <div className="media-body ms-3 align-self-center">
            <h5 className="text-dark fs-18 fw-medium m-0">{title}</h5>
            <p className="text-muted mb-0 fs-13">{link} <Link to=''><i className="ti ti-external-link fs-18 text-primary" /></Link></p>
          </div>
        </div>
        {
          language.map((lag, idx) => (
            <Fragment key={idx}>
              <span key={idx} className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-12 text-uppercase">{lag}</span>&nbsp;
            </Fragment>
          ))
        }
      </CardBody>
    </Card>
  )
}

const Work = () => {

  const [gallery, setGallery] = useState(workData);
  const [category, setCategory] = useState('all');

  const filterImages = (category: string) => {
    setCategory(category);
    setTimeout(() => {
      const galleryAlbums = category === 'all' ? workData : workData.filter(album => album.category?.includes(category));
      setGallery(galleryAlbums);
    }, 300);
  };

  return (
    <section className="section" id="projects">
      <Container>
        <Row className=" justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">Work</span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3">My Projects</h2>
            <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
              We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning .
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="filters-group-wrap">
            <div className="filters-group mb-5">
              <ul className="mb-0 list-unstyled filter-options filter-tab">
                <li className={clsx("list-inline-item position-relative text-dark", { active: category === 'all' })} onClick={() => filterImages('all')} data-group="all">All</li>
                <li className={clsx("list-inline-item position-relative text-dark", { active: category === 'angular' })} onClick={() => filterImages('angular')} data-group="angular">Angular</li>
                <li className={clsx("list-inline-item position-relative text-dark", { active: category === 'mongodb' })} onClick={() => filterImages('mongodb')} data-group="mongodb">Mongodb</li>
                <li className={clsx("list-inline-item position-relative text-dark", { active: category === 'bootstrap' })} onClick={() => filterImages('bootstrap')} data-group="bootstrap">Bootstrap</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className=" d-flex  g-1 justify-content-center" id="grid">
          {
            gallery.map((item, idx) => {
              return (
                <Col lg={4} md={6} key={idx} className="picture-item" data-groups="[&quot;angular&quot;, &quot;bootstrap&quot;]">
                  <WorkCard {...item} />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default Work