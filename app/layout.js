import './globals.scss'
import { Navbar } from '@/components'

export const metadata = {
  title: 'POST YOUR POST',
  description: 'POST YOUR A LIFE MTFKR',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
