import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../../components/Layout'
import { User } from '../../components/User'
import { Tag } from '../../components/Tag'
import { Divider } from '../../components/Divider'
import { About } from '../../components/About'
// import { Post } from '../../components/Post'

import groq from 'groq'
import client from '../../../client'
import { useNextSanityImage } from 'next-sanity-image'
import { PortableText } from '@portabletext/react'

const PostPage = ({ post }: any) => {
  const imageProps = useNextSanityImage(client, post?.mainImage)

  const ptComponents = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          <Image
            {...(imageProps as any)}
            alt=""
            loading="lazy"
            style={{ objectFit: 'cover', borderRadius: '4px' }}
          />
        )
      },
    },
  }

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="max-w-3xl mx-auto flex flex-col gap-3 sm:gap-4 py-4 px-4 sm:px-0">
          <div className="flex justify-between flex-wrap gap-4 sm:gap-0">
            <User />
            <ul className="flex gap-2">
              {post?.categories.map((category: string) => (
                <li key={category}>
                  <Tag>{category}</Tag>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-xl sm:text-3xl text-gray-900 dark:text-white font-semibold">
            {post?.title}
          </h2>

          <p className="text-gray-700 dark:text-gray-200 sm:text-xl">
            {post?.caption}
          </p>

          <div className="flex gap-4">
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-200">
              Posted on {new Date(post?._createdAt).toLocaleString()}
            </span>
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-200">
              Updated on {new Date(post?._updatedAt).toLocaleString()}
            </span>
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-200">
              {post?.readingTime}
            </span>
          </div>

          <div className="relative w-full aspect-video">
            <Image
              {...(imageProps as any)}
              alt="Imagem de capa"
              style={{ objectFit: 'cover', borderRadius: '4px' }}
            />
          </div>

          <div className="text-gray-900 dark:text-white">
            <PortableText value={post?.body} components={ptComponents} />
          </div>

          <Divider>Sobre o autor</Divider>
          <About />
          <Divider>Recomendados</Divider>
          {/* <Post />
          <Post />
          <Post /> */}
        </div>
      </Layout>
    </div>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  caption,
  "categories": categories[]->title,
  _createdAt,
  _updatedAt,
  readingTime,
  mainImage,
  body,
}`

export const getStaticPaths = async () => {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  }
}

export const getStaticProps = async (context: any) => {
  const { slug = '' } = context.params
  const post = await client.fetch(query, { slug })

  return {
    props: {
      post,
    },
  }
}

export default PostPage
