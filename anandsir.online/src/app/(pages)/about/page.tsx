
import Switcher from '@/components/Switcher'
import TopNavbar from '@/components/TopNavbar'
import ActionBox from './components/ActionBox'
import Hero from './components/Hero'
import LifeTime from './components/LifeTime'
import PersonalDetails from './components/PersonalDetails'

const AboutPage = () => {
  // useEffect(() => {
  //   Object.assign(document.body.style, {
  //     backgroundColor: '#121216',
  //     color: '#b7bccd'
  //   })

  //   return () => {
  //     Object.assign(document.body.style, {
  //       backgroundColor: '',
  //       color: ''
  //     })
  //   }
  // }, [])
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
      <LifeTime />
      <div className="position-relative">
        <div className="shape overflow-hidden text-light">
          <svg viewBox="0 0 2880 150" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M110 105L2160 0H2880V150H0V105H110Z" fill="currentColor" /> </svg>
        </div>
      </div>
      <ActionBox />
      <div className="position-relative">
        <div className="shape overflow-hidden bg-footer">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
          </svg>
        </div>
      </div>
      <Switcher />
    </>

  )
}

export default AboutPage