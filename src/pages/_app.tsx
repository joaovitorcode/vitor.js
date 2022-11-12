import '../styles/global.css'
import type { AppProps } from 'next/app'
import { DarkModeContextProvider } from '../contexts/DarkModeContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeContextProvider>
      <Component {...pageProps} />
    </DarkModeContextProvider>
  )
}
