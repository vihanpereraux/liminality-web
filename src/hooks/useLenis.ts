import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    // smooth animation - RAF init
    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // unmount - cleanup
    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return lenisRef.current
}
