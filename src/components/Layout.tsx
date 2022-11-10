import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div className="w-full h-[calc(80px - 100vh)] absolute top-20">
        {children}
        <Footer />
      </div>
    </div>
  )
}
