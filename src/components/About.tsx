import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const About = () => {
  return (
    <div className="w-full flex flex-wrap shadow-md">
      <div className="flex-1 p-12 flex flex-col gap-6 justify-center items-center bg-white dark:bg-gray-800 rounded-t-[4px] sm:rounded-tr-none sm:rounded-l-[4px]">
        <Image
          src="/avatar.jpg"
          alt="Foto de perfil"
          width={96}
          height={96}
          style={{ borderRadius: '100%' }}
        />
        <p className="text-3xl text-gray-900 dark:text-white">
          I&apos;m J. Vitor F.
        </p>
      </div>
      <div className="flex-1 p-12 flex flex-col gap-6 justify-center items-center bg-green-400 rounded-b-[4px] sm:rounded-bl-none sm:rounded-r-[4px]">
        <p className="text-gray-900 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          scelerisque, purus ac imperdiet dignissim, sapien purus ullamcorper
          sem, non mollis massa elit quis quam.
        </p>
        <ul className="flex gap-6">
          <li>
            <a
              className="text-gray-900 hover:text-white"
              href="https://github.com/joaovitorcode"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size="1.5rem" title="GitHub" />
            </a>
          </li>
          <li>
            <a
              className="text-gray-900 hover:text-white"
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
