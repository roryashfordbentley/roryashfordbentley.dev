'use client' // Required for client-side rendering in Next.js

import { useState, useEffect, useCallback } from 'react'
import { InlineSVG } from '@components/InlineSVG/InlineSVG'
import styles from './ThemeToggle.module.css'

const useTheme = () => {
  const [theme, setTheme] = useState<string>('light')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localStorageTheme = localStorage.getItem('theme') ?? ''

      if (['dark', 'light'].includes(localStorageTheme)) {
        setTheme(localStorageTheme)
        document.documentElement.classList.toggle('dark', localStorageTheme === 'dark')
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', newTheme)
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
      return newTheme
    })
  }, [])

  return { theme, toggleTheme }
}

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const sunIcon = 'icons/sun-icon.svg'
  const moonIcon = 'icons/moon-icon.svg'

  return (
    <button
      className={styles.button}
      id="themeToggle"
      type="button"
      role="switch"
      title="Toggle light or dark mode"
      aria-checked={theme === 'dark'}
      onClick={toggleTheme}
    >
      <span className={styles.label}>Toggle light or dark mode</span>

      {theme === 'dark' ? <InlineSVG svgPath={moonIcon} /> : <InlineSVG svgPath={sunIcon} />}
    </button>
  )
}

export default ThemeToggle
