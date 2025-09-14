'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const WavyLinesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Wave parameters
    const waves = Array.from({ length: 8 }, (_, i) => ({
      amplitude: 50 + i * 20,
      frequency: 0.01 + i * 0.005,
      speed: 0.02 + i * 0.01,
      offset: i * Math.PI * 0.5,
      yOffset: canvas.height * 0.2 + i * 80,
      opacity: 0.3 - i * 0.03
    }))

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      time += 0.016

      waves.forEach((wave, index) => {
        ctx.beginPath()
        ctx.strokeStyle = `hsla(${280 + index * 10}, 70%, ${60 + index * 5}%, ${wave.opacity})`
        ctx.lineWidth = 2 + index * 0.5
        ctx.shadowBlur = 20
        ctx.shadowColor = `hsla(${280 + index * 10}, 70%, 60%, 0.5)`

        for (let x = 0; x <= canvas.width; x += 2) {
          const mouseInfluence = Math.exp(-Math.pow((x / canvas.width - mousePos.x) * 2, 2)) * 30
          const y = wave.yOffset + 
                   Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude +
                   Math.sin(x * wave.frequency * 2 + time * wave.speed * 1.5) * (wave.amplitude * 0.3) +
                   mouseInfluence * mousePos.y

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
        ctx.shadowBlur = 0
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePos])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)'
        }}
      />
      
      {/* Additional SVG overlay for extra glow */}
      <svg className="absolute inset-0 w-full h-full opacity-40">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {[...Array(4)].map((_, i) => (
          <motion.path
            key={i}
            d={`M0,${200 + i * 100} Q${400 + i * 50},${150 + i * 80} ${800 + i * 100},${200 + i * 100} T${1600 + i * 200},${200 + i * 100}`}
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            animate={{
              d: [
                `M0,${200 + i * 100} Q${400 + i * 50},${150 + i * 80} ${800 + i * 100},${200 + i * 100} T${1600 + i * 200},${200 + i * 100}`,
                `M0,${220 + i * 100} Q${450 + i * 50},${180 + i * 80} ${850 + i * 100},${220 + i * 100} T${1650 + i * 200},${220 + i * 100}`,
                `M0,${200 + i * 100} Q${400 + i * 50},${150 + i * 80} ${800 + i * 100},${200 + i * 100} T${1600 + i * 200},${200 + i * 100}`
              ]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default WavyLinesBackground