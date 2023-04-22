import './globals.css'

export const metadata = {
  charset: 'utf-8',
  title: 'Create Next App',
  description:
  'A demo React full-stack application using Next.js and React Server Components and the Movies Database API',
viewport: 'width=device-width,initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
