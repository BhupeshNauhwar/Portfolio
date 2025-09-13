import './globals.css'
import type { Metadata } from 'next'

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
        {/* Advanced Diamond Wave Background */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0">
            {/* Large Crystalline Diamonds */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${(i * 12) % 100}%`,
                  top: `${(i * 15) % 100}%`,
                  animation: `crystalWave ${25 + i * 4}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                  animationDelay: `${i * 2}s`
                }}
              >
                <div 
                  className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-gradient-to-br from-cyan-100/12 to-blue-200/6 backdrop-blur-md border border-cyan-200/8"
                  style={{
                    transform: 'rotate(45deg)',
                    clipPath: 'polygon(50% 0%, 85% 25%, 85% 75%, 50% 100%, 15% 75%, 15% 25%)',
                    filter: 'blur(3px)',
                    boxShadow: '0 0 80px rgba(6, 182, 212, 0.15), inset 0 0 40px rgba(255, 255, 255, 0.05)'
                  }}
                />
              </div>
            ))}
            
            {/* Prismatic Triangles */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`prism-${i}`}
                className="absolute"
                style={{
                  left: `${(i * 8 + 4) % 100}%`,
                  top: `${(i * 9 + 3) % 100}%`,
                  animation: `prismFloat ${18 + i * 3}s ease-in-out infinite`,
                  animationDelay: `${i * 1.5}s`
                }}
              >
                <div 
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-white/15 to-cyan-200/8 backdrop-blur-sm border border-white/12"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                    filter: 'blur(2px)',
                    boxShadow: '0 0 50px rgba(255, 255, 255, 0.12), 0 0 25px rgba(6, 182, 212, 0.1)'
                  }}
                />
              </div>
            ))}
            
            {/* Faceted Diamonds */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`facet-${i}`}
                className="absolute"
                style={{
                  left: `${(i * 6) % 100}%`,
                  top: `${(i * 7) % 100}%`,
                  animation: `facetSpin ${12 + i * 2}s linear infinite`,
                  animationDelay: `${i * 0.8}s`
                }}
              >
                <div 
                  className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-200/20 to-blue-300/10 backdrop-blur-sm border border-cyan-100/15"
                  style={{
                    transform: 'rotate(45deg)',
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                    filter: 'blur(1px)',
                    boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)'
                  }}
                />
              </div>
            ))}
            
            {/* Light Refractions */}
            {[...Array(15)].map((_, i) => (
              <div
                key={`light-${i}`}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `lightRefract ${4 + Math.random() * 6}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`
                }}
              >
                <div 
                  className="w-0.5 h-8 md:w-1 md:h-12 bg-gradient-to-t from-transparent via-white/40 to-transparent"
                  style={{
                    transform: `rotate(${Math.random() * 360}deg)`,
                    filter: 'blur(0.5px)',
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
        

      </body>
    </html>
  )
}