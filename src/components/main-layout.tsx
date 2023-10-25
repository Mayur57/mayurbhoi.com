import Navigator from './navigator'

type LayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: LayoutProps) => (
  <div className='mx-auto max-w-2xl pt-8 sm:pt-[3rem] px-6 xs:px-0 pb-52'>
    <Navigator />
    {children}
  </div>
)

export default MainLayout
