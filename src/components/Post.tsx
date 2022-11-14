import Image from 'next/image'
import { User } from './User'
import { Tag } from './Tag'

export const Post = ({ post }: any) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    _createdAt,
  } = post

  return (
    <div className="w-full p-3 sm:p-4 flex gap-3 sm:gap-4 bg-white dark:bg-gray-800 shadow-md rounded-[8px]">
      <div className="flex flex-col flex-1 gap-2 sm:gap-4 py-1 sm:py-2 pl-1 sm:pl-2">
        <div className="flex justify-between">
          <User />
          <div className="hidden sm:flex gap-2">
            <ul className="flex gap-2">
              {categories.map((category: string) => (
                <li key={category}>
                  <Tag>{category}</Tag>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="sm:text-xl text-gray-900 dark:text-white font-semibold leading-[19px] line-clamp-2">
            {title}
          </h2>
          <p className="hidden sm:inline text-gray-700 dark:text-gray-200">
            React hooks are a new addition to the react library and has since
            been widely adopted by react developers
          </p>
        </div>
        <div className="flex gap-4">
          <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-[15px]">
            Posted on {new Date(_createdAt).toDateString()}
          </span>
          <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-[15px]">
            5 min read
          </span>
        </div>
      </div>
      <div className="relative h-[98px] sm:h-[208px] aspect-square">
        <Image
          src="/cover.jpg"
          alt="Imagem de capa"
          fill
          style={{ objectFit: 'cover', borderRadius: '4px' }}
        />
      </div>
    </div>
  )
}
