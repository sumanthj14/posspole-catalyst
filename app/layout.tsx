import './globals.css'
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import SmoothScroll from './components/SmoothScroll/index'
import PopupBannerWrapper from './components/PopupBannerWrapper'

export const metadata = {
  title: 'Posspole Catalyst - Transforming India\'s Talent Ecosystem',
  description: 'Posspole Catalyst bridges education, skill, mindset, and system gaps to create AI-native, product-focused talent for India\'s digital economy. Join our flagship program in Bengaluru.',
  keywords: 'Posspole Catalyst, AI education, product development, talent transformation, India digital economy, skill development, innovation training',
  authors: [{ name: 'Posspole Catalyst' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Posspole Catalyst - Transforming India\'s Talent Ecosystem',
    description: 'Bridge the gaps in education, skills, mindset, and systems with our comprehensive talent transformation program.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0066FF" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.addEventListener('beforeunload', function() {
                  window.scrollTo(0, 0);
                });
                
                window.addEventListener('load', function() {
                  window.scrollTo(0, 0);
                });
              }
            `,
          }}
        />
        <PopupBannerWrapper 
          imageSrc="/images/banner.png"
          imageAlt="Program Registration Banner"
          autoShow={true}
          showDelay={1500}
        />
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  )
}
