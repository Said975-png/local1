import type { Metadata } from 'next'
import { UserProvider } from '@/components/UserContext'
import { OrdersProvider } from '@/components/OrdersContext'
import { CartProvider } from '@/components/CartContext'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'JARVIS - AI-Powered E-commerce Solutions',
  description: 'We create intelligent websites with AI assistants for online stores. Boost sales with automated support, personalized recommendations, and smart interactions.',
  keywords: 'AI, e-commerce, online store, artificial intelligence, web development, JARVIS',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://cdn.builder.io/api/v1/image/assets%2F50ecad9570504ea882f55daf6cd45081%2Fde97f4c2ed77444f80756eae5137eb7f?format=webp&width=800" type="image/png" />
        <link rel="apple-touch-icon" href="https://cdn.builder.io/api/v1/image/assets%2F50ecad9570504ea882f55daf6cd45081%2Fde97f4c2ed77444f80756eae5137eb7f?format=webp&width=800" />
        <Script
          src="https://js.puter.com/v2/"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <UserProvider>
          <OrdersProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </OrdersProvider>
        </UserProvider>
      </body>
    </html>
  )
}
