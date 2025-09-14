'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const RealisticEarth = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const [isWebGLSupported, setIsWebGLSupported] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let scene: any, camera: any, renderer: any, earth: any, clouds: any, stars: any, ribbons: any[] = []
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

        // Scene setup
        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
        renderer = new THREE.WebGLRenderer({ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        })
        
        const size = Math.min(window.innerWidth * 0.4, 350)
        renderer.setSize(size, size)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        mountRef.current?.appendChild(renderer.domElement)

        // Create Earth with realistic materials
        const earthGeometry = new THREE.SphereGeometry(1.5, 64, 64)
        
        // Earth day texture (procedural)
        const canvas = document.createElement('canvas')
        canvas.width = 512
        canvas.height = 256
        const ctx = canvas.getContext('2d')!
        
        // Create earth-like texture
        const gradient = ctx.createLinearGradient(0, 0, 512, 256)
        gradient.addColorStop(0, '#1e40af')
        gradient.addColorStop(0.3, '#059669')
        gradient.addColorStop(0.6, '#d97706')
        gradient.addColorStop(1, '#1e40af')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 512, 256)
        
        // Add continent-like patterns
        ctx.fillStyle = '#059669'
        for (let i = 0; i < 20; i++) {
          ctx.beginPath()
          ctx.arc(Math.random() * 512, Math.random() * 256, Math.random() * 50 + 20, 0, Math.PI * 2)
          ctx.fill()
        }
        
        const earthTexture = new THREE.CanvasTexture(canvas)
        
        // Night lights texture
        const nightCanvas = document.createElement('canvas')
        nightCanvas.width = 512
        nightCanvas.height = 256
        const nightCtx = nightCanvas.getContext('2d')!
        nightCtx.fillStyle = '#000000'
        nightCtx.fillRect(0, 0, 512, 256)
        
        // Add city lights
        nightCtx.fillStyle = '#ffff00'
        for (let i = 0; i < 100; i++) {
          nightCtx.beginPath()
          nightCtx.arc(Math.random() * 512, Math.random() * 256, 1, 0, Math.PI * 2)
          nightCtx.fill()
        }
        
        const nightTexture = new THREE.CanvasTexture(nightCanvas)
        
        const earthMaterial = new THREE.MeshPhongMaterial({
          map: earthTexture,
          emissiveMap: nightTexture,
          emissive: new THREE.Color(0x444444),
          emissiveIntensity: 0.2,
          shininess: 100
        })
        
        earth = new THREE.Mesh(earthGeometry, earthMaterial)
        scene.add(earth)

        // Realistic clouds
        const cloudGeometry = new THREE.SphereGeometry(1.52, 32, 32)
        const cloudCanvas = document.createElement('canvas')
        cloudCanvas.width = 256
        cloudCanvas.height = 128
        const cloudCtx = cloudCanvas.getContext('2d')!
        
        // Create cloud texture
        cloudCtx.fillStyle = 'rgba(255,255,255,0)'
        cloudCtx.fillRect(0, 0, 256, 128)
        cloudCtx.fillStyle = 'rgba(255,255,255,0.8)'
        for (let i = 0; i < 30; i++) {
          cloudCtx.beginPath()
          cloudCtx.arc(Math.random() * 256, Math.random() * 128, Math.random() * 20 + 10, 0, Math.PI * 2)
          cloudCtx.fill()
        }
        
        const cloudTexture = new THREE.CanvasTexture(cloudCanvas)
        const cloudMaterial = new THREE.MeshPhongMaterial({
          map: cloudTexture,
          transparent: true,
          opacity: 0.4
        })
        clouds = new THREE.Mesh(cloudGeometry, cloudMaterial)
        scene.add(clouds)

        // Create swirling ribbons
        for (let i = 0; i < 3; i++) {
          const points = []
          const radius = 2.5 + i * 0.5
          
          for (let j = 0; j <= 100; j++) {
            const angle = (j / 100) * Math.PI * 4
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle * 2) * 0.5
            const z = Math.sin(angle) * radius
            points.push(new THREE.Vector3(x, y, z))
          }
          
          const curve = new THREE.CatmullRomCurve3(points)
          const tubeGeometry = new THREE.TubeGeometry(curve, 100, 0.02, 8, false)
          const ribbonMaterial = new THREE.MeshPhongMaterial({
            color: i === 0 ? 0x06b6d4 : i === 1 ? 0x3b82f6 : 0x8b5cf6,
            transparent: true,
            opacity: 0.6,
            emissive: i === 0 ? 0x06b6d4 : i === 1 ? 0x3b82f6 : 0x8b5cf6,
            emissiveIntensity: 0.2
          })
          
          const ribbon = new THREE.Mesh(tubeGeometry, ribbonMaterial)
          ribbon.rotation.x = i * 0.5
          ribbon.rotation.z = i * 0.3
          ribbons.push(ribbon)
          scene.add(ribbon)
        }

        // Enhanced star field
        const starGeometry = new THREE.BufferGeometry()
        const starCount = 2000
        const positions = new Float32Array(starCount * 3)
        const colors = new Float32Array(starCount * 3)
        
        for (let i = 0; i < starCount * 3; i += 3) {
          positions[i] = (Math.random() - 0.5) * 50
          positions[i + 1] = (Math.random() - 0.5) * 50
          positions[i + 2] = (Math.random() - 0.5) * 50
          
          const color = new THREE.Color()
          color.setHSL(Math.random() * 0.2 + 0.5, 0.55, Math.random() * 0.25 + 0.75)
          colors[i] = color.r
          colors[i + 1] = color.g
          colors[i + 2] = color.b
        }
        
        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
        
        const starMaterial = new THREE.PointsMaterial({
          size: 0.1,
          vertexColors: true,
          transparent: true,
          opacity: 0.8
        })
        stars = new THREE.Points(starGeometry, starMaterial)
        scene.add(stars)

        // Advanced lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.3)
        scene.add(ambientLight)
        
        const sunLight = new THREE.DirectionalLight(0xffffff, 1.5)
        sunLight.position.set(5, 3, 5)
        scene.add(sunLight)
        
        const moonLight = new THREE.DirectionalLight(0x4444ff, 0.3)
        moonLight.position.set(-5, -2, -3)
        scene.add(moonLight)

        camera.position.z = 4

        const handleMouseMove = (event: MouseEvent) => {
          const rect = renderer.domElement.getBoundingClientRect()
          mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1
          mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1
        }

        renderer.domElement.addEventListener('mousemove', handleMouseMove)

        // Animation loop
        const animate = () => {
          animationId = requestAnimationFrame(animate)
          
          const time = Date.now() * 0.001
          
          // Earth rotation
          earth.rotation.y += 0.005
          earth.rotation.x = mouseY * 0.1
          
          // Clouds rotation
          clouds.rotation.y += 0.007
          clouds.rotation.x = mouseY * 0.05
          
          // Ribbon animations
          ribbons.forEach((ribbon, i) => {
            ribbon.rotation.y += 0.01 + i * 0.005
            ribbon.rotation.x = Math.sin(time + i) * 0.2
            ribbon.position.y = Math.sin(time * 2 + i) * 0.1
          })
          
          // Stars rotation
          stars.rotation.y += 0.0002
          stars.rotation.x = Math.sin(time * 0.1) * 0.05
          
          // Camera movement
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
        console.error('Error initializing realistic Earth:', error)
        setIsWebGLSupported(false)
        setIsLoading(false)
      }
    }

    init()

    const handleResize = () => {
      if (renderer && camera) {
        const size = Math.min(window.innerWidth * 0.4, 350)
        renderer.setSize(size, size)
        camera.aspect = 1
        camera.updateProjectionMatrix()
      }
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  if (!isWebGLSupported) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-cyan-400/30 flex items-center justify-center backdrop-blur-sm"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-60 h-60 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl shadow-cyan-500/50"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/30 to-transparent flex items-center justify-center">
            <span className="text-6xl">🌍</span>
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
          filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.4))',
          cursor: 'grab'
        }}
      />
    </div>
  )
}

export default RealisticEarth