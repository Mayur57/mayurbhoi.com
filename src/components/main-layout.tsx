import Footer from './footer'
import Navigator from './navigator'
import { Signature } from './signature'

const MainLayout = ({ children }: any) => (
  <div className='mx-auto max-w-[44rem] pt-8 sm:pt-[3rem] px-6 xs:px-0 pb-52'>
    <Navigator />
    {children}
    <Footer />
    <Signature />
  </div>
)

export default MainLayout
