import './globals.css'

export const metadata = {
  title: 'A4E - Architecture for Engineering',
  description: 'Soluciones de arquitectura industrial especializadas en ingeniería de precisión',
  keywords: 'arquitectura, ingeniería, industrial, construcción, Chile',
  icons: {
    icon: '/logo-a4e.png',
    apple: '/logo-a4e.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
