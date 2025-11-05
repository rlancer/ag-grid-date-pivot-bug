import type { Metadata } from 'next'
import '../src/styles.css'

export const metadata: Metadata = {
  title: 'AG Grid Bug Reproduction',
  description: 'AG Grid Date Pivot Bug Test',
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
