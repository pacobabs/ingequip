import App from '@components/App/App'
import Work from '@components/Work/Work'
import Services from '@components/Services/Services'
import History from '@components/History/History'
import Testimonials from '@components/Testimonials/Testimonials'
import Expertise from '@components/Expertise/Expertise'
import Contact from '@components/Contact/Contact'

const Index = () => {
  return (
    <App>
      <History />
      <Services />
      <Work />
      <Testimonials />
      <Expertise />
      <Contact />
    </App>
  )
}

export default Index
