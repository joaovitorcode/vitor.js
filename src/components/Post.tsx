import Image from 'next/image'
import { User } from './User'
import { Tag } from './Tag'

import client from '../../client'
import { useNextSanityImage } from 'next-sanity-image'
import { PostProps } from '../../typings'

interface Props {
  post: PostProps
}

export const Post = ({ post }: Props) => {
  const imageProps = useNextSanityImage(client, post?.mainImage)

  return (
    <div className="w-full p-3 sm:p-4 flex gap-3 sm:gap-4 bg-white dark:bg-gray-800 shadow-md rounded-[8px]">
      <div className="flex flex-col flex-1 gap-2 sm:gap-4 py-1 sm:py-2 pl-1 sm:pl-2">
        <div className="flex justify-between">
          <User />
          <div className="hidden sm:flex gap-2">
            <ul className="flex gap-2">
              {post?.categories.map((category: string) => (
                <li key={category}>
                  <Tag>{category}</Tag>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="sm:text-xl text-gray-900 dark:text-white font-semibold leading-[19px] line-clamp-2">
            {post?.title}
          </h2>
          <p className="hidden sm:inline text-gray-700 dark:text-gray-200">
            {post?.caption}
          </p>
        </div>
        <div className="flex gap-4">
          <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-[15px]">
            Posted on {new Date(post?._createdAt).toLocaleString()}
          </span>
          <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-[15px]">
            {post?.readingTime}
          </span>
        </div>
      </div>
      <div className="relative h-[98px] sm:h-[208px] aspect-square">
        <Image
          {...imageProps}
          alt="Imagem de capa"
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{
            objectFit: 'cover',
            borderRadius: '4px',
            aspectRatio: ' 1 / 1',
          }}
        />
      </div>
    </div>
  )
}
