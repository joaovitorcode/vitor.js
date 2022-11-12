import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ToggleColorModeButton } from '../components/ToggleColorModeButton'

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full p-4 sm:p-6 bg-white dark:bg-gray-900 flex justify-between">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo do blog vitor.js"
          width={107}
          height={39}
        />
      </Link>
      <div className="flex items-center">
        <ul className="flex gap-4 sm:gap-6">
          <li className="flex items-center">
            <Link
              className="text-sm sm:text-base text-gray-900 dark:text-white uppercase hover:text-green-400 dark:hover:text-green-400"
              href="/about"
            >
              About
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              className="text-sm sm:text-base text-gray-900 dark:text-white uppercase hover:text-green-400 dark:hover:text-green-400"
              href="/skills"
            >
              Skills
            </Link>
          </li>
          <span className="border-l border-gray-200 dark:border-gray-700" />
          <li className="flex items-center">
            <a
              className="text-xl sm:text-2xl text-gray-900 dark:text-white hover:text-green-400 dark:hover:text-green-400"
              href="https://github.com/joaovitorcode"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub title="GitHub" />
            </a>
          </li>
          <li className="flex items-center">
            <a
              className="text-xl sm:text-2xl text-gray-900 dark:text-white hover:text-green-400 dark:hover:text-green-400"
              href="https://www.linkedin.com/in/joaovitorcode/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin title="LinkedIn" />
            </a>
          </li>
          <span className="border-l border-gray-200 dark:border-gray-700" />
          <li className="flex items-center">
            <ToggleColorModeButton />
          </li>
        </ul>
      </div>
    </header>
  )
}
