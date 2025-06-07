
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import clsx from 'clsx';
import { useState } from 'react';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProjectData, ProjectType } from '../data';
;


const ProjectsCard = ({ image, link, title, variant }: ProjectType) => {
  return (
    <Card className="rounded shadow border-0 m-2">
      <div className={`text-center ${variant} py-5 rounded`}>
        <img src={image} alt='lagImg' className="thumb-xl rounded" />
      </div>
      <CardBody className="p-4 m-2">
        <h5 className="text-dark fs-18 fw-medium m-0">{title}</h5>
        <p className="text-muted mb-0 fs-13">{link} <Link to=''><IconifyIcon icon='tabler:external-link' className="fs-18 text-primary" /></Link></p>
      </CardBody>
    </Card>
  )
}


const Projects = () => {

  const [gallery, setGallery] = useState(ProjectData);
  const [category, setCategory] = useState('all');

  const filterImages = (category: string) => {
    setCategory(category);
    setTimeout(() => {
      const galleryAlbums = category === 'all' ? ProjectData : ProjectData.filter(album => album.category?.includes(category));
      setGallery(galleryAlbums);
    }, 300);
  };
  return (
    <section className="section">
      <Container>
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
            gallery.map((item, idx) => (
              <Col lg={4} md={6} key={idx} className="picture-item" data-groups="[&quot;angular&quot;, &quot;bootstrap&quot;]">
                <ProjectsCard {...item} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default Projects