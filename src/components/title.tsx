import { Kaisei_Tokumin } from 'next/font/google'

const kaisei = Kaisei_Tokumin({ subsets: ['latin'], weight: '700', preload: true, display: 'swap' })

const Title = ({ children }: any) => (
  <h1
    className={`leading-tight tracking-tighter text-[#281D1A] dark:text-[#EDEDED] text-3xl sm:text-4xl ${kaisei.className}`}>
    {children}
  </h1>
)

export default Title
