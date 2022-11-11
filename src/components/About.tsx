import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const About = () => {
  return (
    <div className="w-full flex shadow-md">
      <div className="flex-1 p-12 flex flex-col gap-6 justify-center items-center bg-white rounded-l-[4px]">
        <div className="relative w-24 h-24">
          <Image
            src="/avatar.jpg"
            alt="Foto de perfil"
            fill
            style={{ borderRadius: '100%' }}
          />
        </div>
        <p className="text-3xl text-gray-900">I&apos;m J. Vitor F.</p>
      </div>
      <div className="flex-1 p-12 flex flex-col gap-6 justify-center items-center bg-green-400 rounded-r-[4px]">
        <p className="text-gray-900 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          scelerisque, purus ac imperdiet dignissim, sapien purus ullamcorper
          sem, non mollis massa elit quis quam.
        </p>
        <ul className="flex gap-6">
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
    </div>
  )
}
