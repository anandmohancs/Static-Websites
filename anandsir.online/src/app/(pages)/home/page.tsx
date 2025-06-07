
import ActionBox from '@/components/ActionBox'
import TopNavbar from '@/components/TopNavbar'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { useState } from 'react'
import { Button, Collapse } from 'react-bootstrap'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Hero from './components/Hero'
import LifeTime from './components/LifeTime'
import PersonalDetails from './components/PersonalDetails'
import Services from './components/Services'
import Slider from './components/Slider'
import Work from './components/Work'
import Switcher from '@/components/Switcher'

const page = () => {

  const [open, setOpen] = useState(false);
  return (
    <>
      <TopNavbar />
      <Hero />
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
          </svg>
        </div>
      </div>
      <PersonalDetails />
      <Services />
      <LifeTime />
      <div className="position-relative">
        <div className="shape overflow-hidden text-light">
          <svg viewBox="0 0 2880 150" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M110 105L2160 0H2880V150H0V105H110Z" fill="currentColor" /> </svg>
        </div>
      </div>
      <Slider />
      <ActionBox />
      <Work />
      <Blogs />
      <Contact />
      <div className="position-relative">
        <div className="shape overflow-hidden bg-footer">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
          </svg>
        </div>
      </div>



      <div id="style-switcher">
        <Collapse dimension="width" in={open}>
          <div className="p-3 bg-light rounded">
            <h3 className="fw-medium mb-0">Select Your Choice</h3>
            <hr className="hr-dashed my-3" />
            <ul className="pattern">
              <li>
                <a className="color1" href="#color1" />
              </li>
              <li>
                <a className="color2" href="#color2" />
              </li>
              <li>
                <a className="color3" href="#color3" />
              </li>
              <li>
                <a className="color4" href="#color4" />
              </li>
              <li>
                <a className="color5" href="#color5" />
              </li>
              <li>
                <a className="color6" href="#color6" />
              </li>
            </ul>
          </div>
        </Collapse>
        <Button as='div' onClick={() => setOpen(!open)} className="bottom mt-2">
          <IconifyIcon icon="la:paint-brush" className="fs-22" />
        </Button>
      </div>
      <Switcher />
    </>
  )
}

export default page