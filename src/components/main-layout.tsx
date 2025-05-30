import Footer from './footer'
import Navigator from './navigator'
import { Signature } from './signature'

type LayoutProps = {
  isWide?: boolean
  children?: React.ReactNode
}

const MainLayout = ({ children, isWide }: LayoutProps) => (
  <div className={`mx-auto ${isWide ? '' : 'max-w-[44rem]'} pt-12 px-6 xs:px-0 pb-36`}>
    <Navigator />
    {children}
    <Footer />
    <Signature />
  </div>
)

export default MainLayout
