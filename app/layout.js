import './globals.css'

export const metadata = {
  title: 'Texas Garage Fix - Fast Garage Door Repair & Installation',
  description: 'Emergency garage door repair in Houston. Licensed contractors respond in minutes. Springs, openers, installations. Call now!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads Conversion Tracking - Replace AW-CONVERSION_ID with your actual ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-CONVERSION_ID');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
