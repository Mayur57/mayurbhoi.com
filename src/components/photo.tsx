import Image, { StaticImageData } from 'next/image'

export const Photo = ({ src }: { src: StaticImageData }) => {
  return (
        <Image
          className='inline-block z-[5] h-40 w-40 sm:h-48 sm:w-48 rounded-xl object-cover'
          priority
          src={src}
          sizes='(max-width: 768px) 213px, 33vw'
          alt='Me in life jacket in a small dinghy at Yelagiri, Tamil Nadu; on a vacation.'
          placeholder='blur'
        />
  )
}
