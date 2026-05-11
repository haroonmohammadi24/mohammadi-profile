import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
}

export default function HeroScene(props: {
  className?: string
  accent?: 'indigo' | 'fuchsia' | 'emerald'
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (prefersReducedMotion()) return

    let rafId = 0
    let isStopped = false

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio ?? 1, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 0, 6)

    const group = new THREE.Group()
    scene.add(group)

    const ambient = new THREE.AmbientLight(0xffffff, 0.9)
    scene.add(ambient)
    const key = new THREE.DirectionalLight(0xffffff, 1.1)
    key.position.set(3, 3, 5)
    scene.add(key)

    const baseColor =
      props.accent === 'emerald'
        ? new THREE.Color('#10b981')
        : props.accent === 'fuchsia'
          ? new THREE.Color('#d946ef')
          : new THREE.Color('#6366f1')

    const torus = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.1, 0.34, 180, 24),
      new THREE.MeshStandardMaterial({
        color: baseColor,
        roughness: 0.25,
        metalness: 0.35,
        transparent: true,
        opacity: 0.32,
      }),
    )
    group.add(torus)

    const dotsGeo = new THREE.BufferGeometry()
    const dotCount = 450
    const positions = new Float32Array(dotCount * 3)
    const colors = new Float32Array(dotCount * 3)
    const colorA = baseColor.clone()
    const colorB = new THREE.Color('#ffffff')
    for (let i = 0; i < dotCount; i++) {
      const idx = i * 3
      const r = 2.6 + Math.random() * 1.6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(THREE.MathUtils.randFloatSpread(2))
      positions[idx] = r * Math.sin(phi) * Math.cos(theta)
      positions[idx + 1] = r * Math.cos(phi)
      positions[idx + 2] = r * Math.sin(phi) * Math.sin(theta)

      const t = Math.random()
      const c = colorA.clone().lerp(colorB, t * 0.65)
      colors[idx] = c.r
      colors[idx + 1] = c.g
      colors[idx + 2] = c.b
    }
    dotsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    dotsGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    const dots = new THREE.Points(
      dotsGeo,
      new THREE.PointsMaterial({
        size: 0.018,
        vertexColors: true,
        transparent: true,
        opacity: 0.65,
        depthWrite: false,
      }),
    )
    group.add(dots)

    const onResize = () => {
      const rect = canvas.getBoundingClientRect()
      const width = Math.max(1, Math.floor(rect.width))
      const height = Math.max(1, Math.floor(rect.height))
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    onResize()

    const resizeObserver = new ResizeObserver(() => onResize())
    resizeObserver.observe(canvas)

    const clock = new THREE.Clock()

    const render = () => {
      if (isStopped) return
      rafId = window.requestAnimationFrame(render)

      const t = clock.getElapsedTime()
      group.rotation.y = t * 0.14
      group.rotation.x = Math.sin(t * 0.22) * 0.08
      torus.rotation.y = t * 0.35
      torus.rotation.x = t * 0.25
      dots.rotation.y = -t * 0.06

      renderer.render(scene, camera)
    }

    const onVisibility = () => {
      if (document.visibilityState === 'hidden') {
        window.cancelAnimationFrame(rafId)
      } else {
        window.cancelAnimationFrame(rafId)
        render()
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    render()

    return () => {
      isStopped = true
      window.cancelAnimationFrame(rafId)
      document.removeEventListener('visibilitychange', onVisibility)
      resizeObserver.disconnect()

      dotsGeo.dispose()
      ;(torus.geometry as THREE.BufferGeometry).dispose()
      ;(torus.material as THREE.Material).dispose()
      ;(dots.material as THREE.Material).dispose()
      renderer.dispose()
    }
  }, [props.accent])

  return (
    <canvas
      ref={canvasRef}
      className={props.className}
      aria-hidden="true"
    />
  )
}

