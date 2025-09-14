import './globals.css'
import type { Metadata } from 'next'
import BackgroundAnimations from '../components/BackgroundAnimations'

export const metadata: Metadata = {
  title: 'Bhupesh Kumar - Full Stack Developer',
  description: 'Aspiring Full-Stack Developer with expertise in Java, Spring Boot, Angular, and MERN stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-slate-900 text-white relative min-h-screen">
        <BackgroundAnimations />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}