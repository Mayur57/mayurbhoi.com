'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.JSX.Element[] }) {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}
