import './globals.css'

export const metadata = {
  title: 'Texas Garage Fix - Fast Garage Door Repair & Installation',
  description: 'Emergency garage door repair in Houston. Vetted contractors respond fast. Springs, openers, installations. Get a free quote!',
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

              // Event snippet for Submit lead form conversion
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-17733369236/on9LCMmR4sAbEJT79odC',
                    'value': 1.0,
                    'currency': 'USD',
                    'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
