import './globals.css'
import { Audiowide } from 'next/font/google'

const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-audiowide',
})

export const metadata = {
  title: 'AFOR - Architecture for Engineering',
  description: 'Soluciones de arquitectura industrial especializadas en ingeniería de precisión',
  keywords: 'arquitectura, ingeniería, industrial, construcción, Chile',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={audiowide.variable}>
      <body>{children}</body>
    </html>
  )
}
