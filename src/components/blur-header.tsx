export default function BlurHeader() {
  return (
    <>
      <div
        className='fixed top-0 w-full h-14 backdrop-blur-sm z-10'
        style={{
          maskImage:
            'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
          WebkitMaskImage:
            'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
        }}></div>
      <div
        className='fixed top-0 w-full h-14 backdrop-blur-sm z-20'
        style={{
          maskImage:
            'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
          WebkitMaskImage:
            'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
        }}></div>
      <div
        className='fixed top-0 w-full h-14 backdrop-blur-sm z-30'
        style={{
          maskImage:
            'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
          WebkitMaskImage:
            'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
        }}></div>
      <div
        className='fixed top-0 w-full h-14 backdrop-blur-sm z-40'
        style={{
          maskImage:
            'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
          WebkitMaskImage:
            'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
        }}></div>
    </>
  )
}
