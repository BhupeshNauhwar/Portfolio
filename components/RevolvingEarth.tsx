'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const RevolvingEarth = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const [isWebGLSupported, setIsWebGLSupported] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let scene: any, camera: any, renderer: any, earth: any, clouds: any, stars: any
    let animationId: number
    let mouseX = 0, mouseY = 0

    const init = async () => {
      try {
        // Dynamic import for Three.js to reduce bundle size
        const THREE = await import('three')
        
        // Check WebGL support
        if (!THREE.WebGLRenderer.isWebGLAvailable()) {
          setIsWebGLSupported(false)
          setIsLoading(false)
          return
        }

        // Scene setup
        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
        renderer = new THREE.WebGLRenderer({ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        })
        
        const size = Math.min(window.innerWidth * 0.4, 300)
        renderer.setSize(size, size)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        mountRef.current?.appendChild(renderer.domElement)

        // Advanced Earth geometry and materials
        const earthGeometry = new THREE.SphereGeometry(1.2, 64, 64)
        
        // Multi-layered Earth materials
        const earthMaterial = new THREE.MeshPhongMaterial({
          color: 0x1e40af,
          shininess: 150,
          transparent: true,
          opacity: 0.95,
          emissive: 0x0a1a3a,
          emissiveIntensity: 0.1
        })
        
        earth = new THREE.Mesh(earthGeometry, earthMaterial)
        scene.add(earth)

        // Multiple cloud layers
        const cloudGeometry1 = new THREE.SphereGeometry(1.25, 32, 32)
        const cloudMaterial1 = new THREE.MeshPhongMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.2,
          side: THREE.DoubleSide
        })
        const clouds1 = new THREE.Mesh(cloudGeometry1, cloudMaterial1)
        scene.add(clouds1)
        
        const cloudGeometry2 = new THREE.SphereGeometry(1.3, 24, 24)
        const cloudMaterial2 = new THREE.MeshPhongMaterial({
          color: 0x87ceeb,
          transparent: true,
          opacity: 0.15,
          side: THREE.DoubleSide
        })
        clouds = new THREE.Mesh(cloudGeometry2, cloudMaterial2)
        scene.add(clouds)
        
        // Atmosphere glow
        const atmosphereGeometry = new THREE.SphereGeometry(1.4, 32, 32)
        const atmosphereMaterial = new THREE.MeshPhongMaterial({
          color: 0x06b6d4,
          transparent: true,
          opacity: 0.1,
          side: THREE.BackSide
        })
        const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
        scene.add(atmosphere)

        // Stars background
        const starGeometry = new THREE.BufferGeometry()
        const starCount = 1000
        const positions = new Float32Array(starCount * 3)
        
        for (let i = 0; i < starCount * 3; i++) {
          positions[i] = (Math.random() - 0.5) * 20
        }
        
        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        const starMaterial = new THREE.PointsMaterial({
          color: 0x06b6d4,
          size: 0.02,
          transparent: true,
          opacity: 0.8
        })
        stars = new THREE.Points(starGeometry, starMaterial)
        scene.add(stars)

        // Advanced lighting setup
        const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
        scene.add(ambientLight)
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2)
        directionalLight.position.set(5, 3, 5)
        directionalLight.castShadow = true
        scene.add(directionalLight)
        
        const pointLight1 = new THREE.PointLight(0x06b6d4, 0.8, 10)
        pointLight1.position.set(-3, 2, 3)
        scene.add(pointLight1)
        
        const pointLight2 = new THREE.PointLight(0x3b82f6, 0.6, 8)
        pointLight2.position.set(3, -2, -3)
        scene.add(pointLight2)

        camera.position.z = 3

        // Mouse interaction
        const handleMouseMove = (event: MouseEvent) => {
          const rect = renderer.domElement.getBoundingClientRect()
          mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1
          mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1
        }

        renderer.domElement.addEventListener('mousemove', handleMouseMove)

        // Create orbital rings
        const orbitalRings = []
        for (let i = 0; i < 5; i++) {
          const ringGeometry = new THREE.RingGeometry(2 + i * 0.5, 2.05 + i * 0.5, 64)
          const ringMaterial = new THREE.MeshBasicMaterial({
            color: i % 2 === 0 ? 0x06b6d4 : 0x3b82f6,
            transparent: true,
            opacity: 0.3 - i * 0.05,
            side: THREE.DoubleSide
          })
          const ring = new THREE.Mesh(ringGeometry, ringMaterial)
          ring.rotation.x = Math.PI / 2 + (i * 0.2)
          ring.rotation.z = i * 0.3
          orbitalRings.push(ring)
          scene.add(ring)
        }
        
        // Create satellites
        const satellites = []
        for (let i = 0; i < 8; i++) {
          const satGeometry = new THREE.SphereGeometry(0.03, 8, 8)
          const satMaterial = new THREE.MeshPhongMaterial({
            color: i % 3 === 0 ? 0x06b6d4 : i % 3 === 1 ? 0xfbbf24 : 0xf472b6,
            emissive: i % 3 === 0 ? 0x06b6d4 : i % 3 === 1 ? 0xfbbf24 : 0xf472b6,
            emissiveIntensity: 0.3
          })
          const satellite = new THREE.Mesh(satGeometry, satMaterial)
          satellites.push({ mesh: satellite, angle: i * (Math.PI * 2 / 8), radius: 2.5 + Math.random() * 1.5, speed: 0.01 + Math.random() * 0.02 })
          scene.add(satellite)
        }

        // Animation loop
        const animate = () => {
          animationId = requestAnimationFrame(animate)
          
          const time = Date.now() * 0.001
          
          // Earth rotation with wobble
          earth.rotation.y += 0.008
          earth.rotation.x = Math.sin(time * 0.5) * 0.1 + mouseY * 0.15
          earth.rotation.z = Math.cos(time * 0.3) * 0.05 + mouseX * 0.1
          
          // Multi-layer clouds rotation
          clouds1.rotation.y += 0.012
          clouds1.rotation.x = mouseY * 0.08
          clouds.rotation.y += 0.015
          clouds.rotation.z = Math.sin(time * 0.4) * 0.1
          
          // Animate orbital rings
          orbitalRings.forEach((ring, i) => {
            ring.rotation.z += 0.005 + i * 0.002
            ring.rotation.y = Math.sin(time + i) * 0.1
            ring.material.opacity = 0.2 + Math.sin(time * 2 + i) * 0.1
          })
          
          // Animate satellites
          satellites.forEach((sat, i) => {
            sat.angle += sat.speed
            sat.mesh.position.x = Math.cos(sat.angle) * sat.radius
            sat.mesh.position.z = Math.sin(sat.angle) * sat.radius
            sat.mesh.position.y = Math.sin(sat.angle * 2) * 0.5
            sat.mesh.rotation.y += 0.1
          })
          
          // Stars rotation
          stars.rotation.y += 0.0005
          stars.rotation.x = Math.sin(time * 0.1) * 0.1
          
          // Dynamic lighting
          pointLight1.intensity = 0.8 + Math.sin(time * 3) * 0.2
          pointLight2.intensity = 0.6 + Math.cos(time * 2) * 0.2
          
          // Camera movement
          camera.position.x = mouseX * 0.2
          camera.position.y = mouseY * 0.2
          camera.position.z = 3 + Math.sin(time * 0.5) * 0.1
          camera.lookAt(scene.position)
          
          renderer.render(scene, camera)
        }

        animate()
        setIsLoading(false)

        // Cleanup function
        return () => {
          renderer.domElement.removeEventListener('mousemove', handleMouseMove)
          if (animationId) {
            cancelAnimationFrame(animationId)
          }
          if (mountRef.current && renderer.domElement) {
            mountRef.current.removeChild(renderer.domElement)
          }
          renderer.dispose()
        }

      } catch (error) {
        console.error('Error initializing 3D Earth:', error)
        setIsWebGLSupported(false)
        setIsLoading(false)
      }
    }

    init()

    // Handle resize
    const handleResize = () => {
      if (renderer && camera) {
        const size = Math.min(window.innerWidth * 0.4, 300)
        renderer.setSize(size, size)
        camera.aspect = 1
        camera.updateProjectionMatrix()
      }
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  // Fallback for unsupported WebGL
  if (!isWebGLSupported) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-cyan-400/30 flex items-center justify-center backdrop-blur-sm"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl shadow-cyan-500/50"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/30 to-transparent flex items-center justify-center">
            <span className="text-4xl">🌍</span>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="relative">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full"
          />
        </motion.div>
      )}
      
      <motion.div
        ref={mountRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isLoading ? 0.3 : 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center"
        style={{ 
          filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))',
          cursor: 'grab'
        }}
      />
      
      {/* Orbital rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border border-cyan-400/20 rounded-full"
        style={{ transform: 'rotateX(75deg)' }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 border border-blue-400/15 rounded-full"
        style={{ transform: 'rotateX(60deg) rotateY(30deg)' }}
      />
    </div>
  )
}

export default RevolvingEarth