
import contact from '@/assets/images/personal/contact.svg'
import testiPet from '@/assets/images/personal/testi-pet.png'

import TextAreaFormInput from '@/components/form/TextAreaFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'


const Contact = () => {
  const messageSchema = yup.object({
    name: yup.string().required('Please enter name'),
    email: yup.string().email().required('Please enter email'),
    subject: yup.string().required('Please enter subject'),
    contact: yup.string().required('Please enter contact'),
    message: yup.string().required('Please enter message'),
  })

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(messageSchema),
  })
  return (
    <section className="section">
      <Container>
        <Row>
          <Col xs={12}>
            <Card className="bg-white" style={{ background: `url(${testiPet})`, backgroundRepeat: 'no-repeat', backgroundSize: '15%', backgroundPosition: 'right bottom' }}>
              <CardBody>
                <Row>
                  <Col md={8} >
                    <h2 className="fs-2 fw-normal lh-1 text-dark mb-3">Get in touch !</h2>
                    <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 ">Always available for freelancing if the right project <br /> comes along, Feel free to contact me.</p>
                    <form onSubmit={handleSubmit(() => { })} method="post" name="myForm" >
                      <span id="error-msg" />
                      <Row>
                        <Col md={6} className="mb-3">
                          <TextFormInput control={control} name="name" placeholder="Your name" label="Name" />
                        </Col>
                        <Col md={6} className="mb-3">
                          <TextFormInput control={control} name="email" placeholder="Your email" label="Email" />
                        </Col>
                        <Col md={6} className="mb-3">
                          <TextFormInput control={control} name="subject" placeholder="Your subject" label="Subject" />
                        </Col>
                        <Col md={6} className="mb-3">
                          <TextFormInput control={control} name="contact" placeholder="Your contact" label="Contact" />
                        </Col>
                        <Col xs={12} className="mb-3">
                          <TextAreaFormInput control={control} name="message" placeholder="Your message" label="Message" />
                        </Col>
                        <Col xs={12}>
                          <Button type="submit" id="submit" className="btn btn-primary mt-2">
                            Send message
                          </Button>
                        </Col>
                      </Row>
                    </form>
                  </Col>
                  <Col md={4}>
                    <img src={contact} alt='contact' height={200} className=" mx-auto d-block mb-5" />
                    <div className="d-flex">
                      <div className="bg-light d-flex justify-content-center align-items-center thumb-lg  rounded">
                        <IconifyIcon icon='tabler:phone' className="fs-22" />
                      </div>
                      <div className="align-self-center ms-3">
                        <span className="d-block lh-1">+1 234 567 89</span>
                        <span className="text-muted fs-14 mt-n2">9:00am to 7:00pm</span>
                      </div>
                    </div>
                    <hr className="hr-dashed my-3" />
                    <div className="d-flex">
                      <div className="bg-light d-flex justify-content-center align-items-center thumb-lg  rounded">
                        <IconifyIcon icon='tabler:mail' className="fs-22" />
                      </div>
                      <div className="align-self-center ms-3">
                        <span className="d-block lh-1">example@example.com</span>
                        <span className="text-muted fs-14 mt-n2">Monday to Saturday</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact

