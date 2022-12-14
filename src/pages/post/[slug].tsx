import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '../../components/Layout'
import { User } from '../../components/User'
import { Tag } from '../../components/Tag'
import { Divider } from '../../components/Divider'
import { About } from '../../components/About'
import { Post } from '../../components/Post'
import { PostProps } from '../../../typings'

import groq from 'groq'
import client from '../../../client'
import { useNextSanityImage } from 'next-sanity-image'
import { PortableText } from '@portabletext/react'

import {
  ImageComponent,
  ListItemComponent,
  UnorderedListComponent,
  AnchorComponent,
  ParagraphComponent,
  Heading2Component,
  Heading1Component,
} from '../../styles/portableText'

interface Props {
  post: PostProps
}

const PostPage = ({ post }: Props) => {
  const imageProps = useNextSanityImage(client, post?.mainImage)

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
              {...imageProps}
              alt="Imagem de capa"
              priority
              sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
              style={{ objectFit: 'cover', borderRadius: '4px' }}
            />
          </div>

          <div className="text-gray-900 dark:text-white">
            <PortableText
              value={post?.body as any}
              components={{
                block: {
                  h1: Heading1Component,
                  h2: Heading2Component,
                  normal: ParagraphComponent,
                },
                marks: {
                  link: AnchorComponent,
                },
                list: {
                  bullet: UnorderedListComponent,
                },
                listItem: {
                  bullet: ListItemComponent,
                },
                types: {
                  image: ImageComponent,
                },
              }}
            />
          </div>

          <Divider>Sobre o autor</Divider>
          <About />
          <Divider>Recomendados</Divider>

          <ul className="flex flex-col gap-4 py-4">
            <li key={post?.slug?.current} className="list-none">
              <Link href={`/post/${post?.slug?.current}`}>
                <Post post={post} />
              </Link>
            </li>
          </ul>
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
  slug,
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
    revalidate: 60,
  }
}

export default PostPage
