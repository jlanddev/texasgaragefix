import './globals.css'

export const metadata = {
  title: 'Texas Garage Fix - Fast Garage Door Repair & Installation',
  description: 'Emergency garage door repair in Houston. Licensed contractors respond in minutes. Springs, openers, installations. Call now!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17733369236"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17733369236');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
