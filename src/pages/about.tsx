import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/Layout'

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>vitor.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="max-w-3xl mx-auto flex flex-col gap-3 sm:gap-4 py-4 px-4 sm:px-0">
          <div className="flex flex-col gap-2 items-center">
            <Image
              src="/avatar.jpg"
              alt="Foto de perfil"
              width={96}
              height={96}
              style={{ borderRadius: '100%' }}
            />
            <h2 className="font-semibold text-2xl text-gray-900 dark:text-white">
              J. Vitor F.
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Junior React Developer
            </p>
          </div>
          <p className="text-gray-900 dark:text-white">
            Initially, I didn&apos;t have a great design in mind. So I just
            started coding and it turned out better than I expected (trust me, I
            thought worse). You will see two versions of my portfolio. There is
            an older one and a newer one.
          </p>
          <p className="text-gray-900 dark:text-white">
            Initially, I didn&apos;t have a great design in mind. So I just
            started coding and it turned out better than I expected (trust me, I
            thought worse). You will see two versions of my portfolio. There is
            an older one and a newer one.
          </p>
          <p className="text-gray-900 dark:text-white">
            Initially, I didn&apos;t have a great design in mind. So I just
            started coding and it turned out better than I expected (trust me, I
            thought worse). You will see two versions of my portfolio. There is
            an older one and a newer one.
          </p>
          <p className="text-gray-900 dark:text-white">
            Initially, I didn&apos;t have a great design in mind. So I just
            started coding and it turned out better than I expected (trust me, I
            thought worse). You will see two versions of my portfolio. There is
            an older one and a newer one.
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default AboutPage
