import { useEffect } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useDarkMode } from '../hooks/useDarkMode'

export const ToggleColorModeButton = () => {
  const { isDark, setIsDark } = useDarkMode()

  useEffect(() => {
    const htmlElement = document.querySelector('html')
    isDark === 'dark'
      ? htmlElement?.classList.add('dark')
      : htmlElement?.classList.remove('dark')
  }, [isDark])

  useEffect(() => {
    let localStorage = window.localStorage.getItem('theme')
    setIsDark(localStorage!)
  }, [setIsDark])

  const switchTheme = () => {
    const theme = isDark === 'light' ? 'dark' : 'light'
    window.localStorage.setItem('theme', theme)
    setIsDark(theme)
  }

  return (
    <button
      onClick={switchTheme}
      className="text-xl sm:text-2xl text-gray-900 dark:text-white hover:text-green-400 dark:hover:text-green-400"
    >
      {isDark === 'dark' ? (
        <MdLightMode title="Mode light" />
      ) : (
        <MdDarkMode title="Modo dark" />
      )}
    </button>
  )
}
