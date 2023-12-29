import Image, { StaticImageData } from 'next/image'

export const Photo = ({ src }: { src: StaticImageData }) => {
  return (
        <Image
          className='not-prose inline-block z-[5] h-36 w-36 mb-4 rounded-xl object-cover'
          priority
          src={src}
          sizes='(max-width: 768px) 213px, 33vw'
          alt='Me in life jacket in a small dinghy at Yelagiri, Tamil Nadu; on a vacation.'
          placeholder='blur'
        />
  )
}
