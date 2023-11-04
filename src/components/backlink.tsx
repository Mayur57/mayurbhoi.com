'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Backlink = ({ href }: { href: string }) => (
  <Link href={href}>
    <motion.div
      className='inline-flex items-center -mt-8 pb-8 opacity-80 hover:opacity-100 cursor-pointer'
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
      <span className='dark:invert scale-50 pb-1'>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'>
          <path
            fill='#000'
            d='M20.088 14.434c0-1.113-.24-2.093-.721-2.937-.481-.845-1.174-1.505-2.08-1.98-.904-.475-1.993-.713-3.265-.713H8.723l-2.83.123.267.485 2.095-1.77 2.159-2.111a.847.847 0 0 0 .27-.64.877.877 0 0 0-.246-.64c-.164-.167-.38-.251-.652-.251a.915.915 0 0 0-.667.286L4.292 9.039a.898.898 0 0 0-.292.68c0 .269.097.498.292.688l4.828 4.75c.19.19.413.285.667.285.271 0 .488-.084.652-.251a.885.885 0 0 0 .245-.645.863.863 0 0 0-.072-.36.85.85 0 0 0-.197-.274l-2.16-2.108-2.094-1.772-.266.487 2.83.12h5.35c.905 0 1.668.159 2.29.475.621.316 1.094.754 1.419 1.314.324.56.486 1.207.486 1.94 0 .727-.162 1.378-.486 1.951a3.416 3.416 0 0 1-1.42 1.352c-.621.328-1.385.492-2.29.492h-1.957a.893.893 0 0 0-.67.268.896.896 0 0 0-.26.647.904.904 0 0 0 .931.922h2.014c1.253 0 2.323-.23 3.211-.691.888-.46 1.568-1.109 2.039-1.944.47-.835.706-1.812.706-2.93Z'
          />
        </svg>
      </span>
      <p className='font-serif text-sm italic'>Index</p>
    </motion.div>
  </Link>
)

export default Backlink
