import { Kaisei_Tokumin } from 'next/font/google'

const kaisei = Kaisei_Tokumin({ subsets: ['latin'], weight: '700', preload: true })

const Title = ({ children }: any) => (
  <h1
    className={`leading-tight tracking-tighter text-[#281D1A] dark:text-[#EDEDED] text-4xl sm:text-5xl ${kaisei.className}`}>
    {children}
  </h1>
)

export default Title
