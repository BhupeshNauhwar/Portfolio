'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const AdvancedSphere = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const [isWebGLSupported, setIsWebGLSupported] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let scene: any, camera: any, renderer: any, earth: any
    let animationId: number
    let mouseX = 0, mouseY = 0

    const init = async () => {
      try {
        const THREE = await import('three')
        
        if (!THREE.WebGLRenderer.isWebGLAvailable()) {
          setIsWebGLSupported(false)
          setIsLoading(false)
          return
        }

        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        
        const size = 400
        renderer.setSize(size, size)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        mountRef.current?.appendChild(renderer.domElement)

        const earthGeometry = new THREE.SphereGeometry(2, 64, 64)
        const earthMaterial = new THREE.MeshPhongMaterial({
          color: 0x1e40af,
          shininess: 100
        })
        
        earth = new THREE.Mesh(earthGeometry, earthMaterial)
        scene.add(earth)

        const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
        scene.add(ambientLight)
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2)
        directionalLight.position.set(5, 3, 5)
        scene.add(directionalLight)

        camera.position.z = 5

        const handleMouseMove = (event: MouseEvent) => {
          const rect = renderer.domElement.getBoundingClientRect()
          mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1
          mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1
        }

        renderer.domElement.addEventListener('mousemove', handleMouseMove)

        const animate = () => {
          animationId = requestAnimationFrame(animate)
          
          earth.rotation.y += 0.01
          earth.rotation.x = mouseY * 0.1
          earth.rotation.z = mouseX * 0.1
          
          camera.position.x = mouseX * 0.2
          camera.position.y = mouseY * 0.2
          camera.lookAt(scene.position)
          
          renderer.render(scene, camera)
        }

        animate()
        setIsLoading(false)

        return () => {
          renderer.domElement.removeEventListener('mousemove', handleMouseMove)
          if (animationId) cancelAnimationFrame(animationId)
          if (mountRef.current && renderer.domElement) {
            mountRef.current.removeChild(renderer.domElement)
          }
          renderer.dispose()
        }

      } catch (error) {
        setIsWebGLSupported(false)
        setIsLoading(false)
      }
    }

    init()

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  if (!isWebGLSupported) {
    return (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-600 via-green-500 to-blue-800 shadow-2xl"
      >
        <div className="w-full h-full rounded-full flex items-center justify-center text-6xl">
          🌍
        </div>
      </motion.div>
    )
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      <div
        ref={mountRef}
        className="flex items-center justify-center"
        style={{ 
          filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.4))',
          cursor: 'grab'
        }}
      />
    </div>
  )
}

export default AdvancedSphere