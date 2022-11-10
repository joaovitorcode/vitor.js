import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Header = () => {
  return (
    <header className="w-full p-6 bg-white flex justify-between fixed z-10">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo do blog vitor.js"
          width={107}
          height={39}
        />
      </Link>
      <div className="flex items-center">
        <ul className="flex gap-6">
          <li>
            <Link
              className="text-gray-900 uppercase hover:text-green-400"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-900 uppercase hover:text-green-400"
              href="/skills"
            >
              Skills
            </Link>
          </li>
          <span className="border-l border-gray-200" />
          <li>
            <a
              className="text-gray-900 hover:text-green-400"
              href="https://github.com/joaovitorcode"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size="1.5rem" title="GitHub" />
            </a>
          </li>
          <li>
            <a
              className="text-gray-900 hover:text-green-400"
              href="https://www.linkedin.com/in/joaovitorcode/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size="1.5rem" title="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
