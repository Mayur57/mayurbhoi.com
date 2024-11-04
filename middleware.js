import { NextResponse } from 'next/server'

const allowedOrigins = ['https://mayurbhoi.com', 'https://mayur.wtf']

export function middleware(req) {
  const origin = req.headers.get('origin')

  if (!allowedOrigins.includes(origin)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  return NextResponse.next()
}

// Apply this middleware only to API routes
export const config = {
  matcher: '/api/:path*',
}
