// Image loading shimmer string generator
export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" opacity="0.3"/>
  <rect id="r" width="${w / 3}" height="${h}" fill="url(#g)" opacity="0.4" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="2s" repeatCount="indefinite"  />
</svg>`

// Convert given string to base64
export const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

// Stagger the element using the given rank for group animations
export const stagger = (rank: number) => `stagger-${rank}`

// Capitalise the first letter of the given string
export const capitalised = (str: string | undefined) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : ''
}

// Get the current time in IST
export const getLocalTime = () => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  })
  return formatter.format(new Date()).substring(0, 2) === '24'
    ? '00' + formatter.format(new Date()).substring(2)
    : formatter.format(new Date())
}
