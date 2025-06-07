import ActionBox from '@/components/ActionBox'
import TopNavbar from '@/components/TopNavbar'
import BlogDetails from './components/BlogDetails'
import Hero from './components/Hero'
import Switcher from '@/components/Switcher'

const BlogDetailsPage = () => {
  return (
    <>
      <TopNavbar isDark/>
      <Hero />
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
          </svg>
        </div>
      </div>
      <BlogDetails />
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

export default BlogDetailsPage