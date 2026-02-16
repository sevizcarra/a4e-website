import './globals.css'

export const metadata = {
  title: 'A4E - Architecture for Engineering',
  description: 'Soluciones de arquitectura industrial especializadas en ingeniería de precisión',
  keywords: 'arquitectura, ingeniería, industrial, construcción, Chile',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
