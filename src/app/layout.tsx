import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import './globals.css'
import { Poppins } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Sirine Soltani Website',
  description: 'Personal Website',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body  className={`${poppins.className} font-sans`} id="root" >
        {children}</body>
    </html>
  )
}
