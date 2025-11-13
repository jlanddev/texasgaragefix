import './globals.css'

export const metadata = {
  title: 'Texas Garage Fix - Fast Garage Door Repair & Installation',
  description: 'Emergency garage door repair in Houston. Licensed contractors respond in minutes. Springs, openers, installations. Call now!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
