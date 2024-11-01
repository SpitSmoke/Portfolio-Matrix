import React, { useEffect } from 'react'
import { CodeRainContainer } from './Styles'

const CodeRain: React.FC<{ active: boolean }> = ({ active }) => {
  useEffect(() => {
    if (!active) return

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const codeElements: HTMLDivElement[] = []

    const createCode = () => {
      const codeElement = document.createElement('div')
      codeElement.className = 'code'
      codeElement.textContent = characters.charAt(
        Math.floor(Math.random() * characters.length)
      )
      codeElement.style.left = Math.random() * 100 + 'vw'
      codeElement.style.animationDuration = Math.random() * 2 + 3 + 's'
      document.body.appendChild(codeElement)
      codeElements.push(codeElement)

      setTimeout(() => {
        codeElement.remove()
      }, 5000)
    }

    const interval = setInterval(createCode, 100)

    return () => {
      clearInterval(interval)
      codeElements.forEach((element) => element.remove())
    }
  }, [active])

  return <CodeRainContainer />
}

export default CodeRain
