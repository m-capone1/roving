'use client'
import { useEffect } from 'react'

export function MaterialSymbols() {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href =
      'https://fonts.googleapis.com/css2?family=Sora:wght@800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block'
    document.head.appendChild(link)
  }, [])
  return null
}
