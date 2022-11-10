import Image from 'next/image'
import Link from 'next/link'
import { User } from './User'
import { Tag } from './Tag'

export const Post = () => {
  return (
    <Link href="/post/1">
      <div className="w-full p-4 flex gap-4 shadow-md rounded-[8px]">
        <div className="flex flex-col flex-1 gap-4 py-2 pl-2">
          <div className="flex justify-between">
            <User />
            <div className="flex gap-2">
              <Tag>React</Tag>
              <Tag>JavaScript</Tag>
              <Tag>WebDev</Tag>
              <Tag>Node</Tag>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl text-gray-900 font-semibold">
              The Power of React Hooks - Create an app using only this feature
              in React
            </h2>
            <p className="text-gray-700">
              React hooks are a new addition to the react library and has since
              been widely adopted by react developers
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-sm text-gray-700">Posted on 10 Nov 22</span>
            <span className="text-sm text-gray-700">5 min read</span>
          </div>
        </div>
        <div className="relative w-[208px] h-[208px]">
          <Image
            src="/cover.jpg"
            alt="Imagem de capa"
            fill
            style={{ objectFit: 'cover', borderRadius: '4px' }}
          />
        </div>
      </div>
    </Link>
  )
}
