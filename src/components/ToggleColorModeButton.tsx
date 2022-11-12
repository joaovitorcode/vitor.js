import { useState, useEffect } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useDarkMode } from '../hooks/useDarkMode'

export const ToggleColorModeButton = () => {
  const { isDark, setIsDark } = useDarkMode()

  useEffect(() => {
    const htmlElement = document.querySelector('html')
    isDark
      ? htmlElement?.classList.add('dark')
      : htmlElement?.classList.remove('dark')
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(prevState => !prevState)}
      className="text-xl sm:text-2xl text-gray-900 dark:text-white hover:text-green-400 dark:hover:text-green-400"
    >
      {isDark ? (
        <MdLightMode title="Mode light" />
      ) : (
        <MdDarkMode title="Modo dark" />
      )}
    </button>
  )
}
