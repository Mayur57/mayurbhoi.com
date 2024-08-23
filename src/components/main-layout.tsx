import Footer from './footer'
import Navigator from './navigator'
import { Signature } from './signature'

type LayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: LayoutProps) => (
  <div className='mx-auto max-w-[44rem] pt-8 sm:pt-[3rem] px-6 xs:px-0 pb-36'>
    <Navigator />
    {children}
    <Footer />
    <Signature />
  </div>
)

export default MainLayout
