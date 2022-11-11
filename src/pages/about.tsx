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
        <div className="max-w-3xl mx-auto">
          <div className="mt-4 flex flex-col gap-4 px-4 sm:px-0">
            <div className="flex flex-col gap-2 items-center">
              <div className="relative w-24 h-24">
                <Image
                  src="/avatar.jpg"
                  alt="Foto de perfil"
                  fill
                  style={{ borderRadius: '100%' }}
                />
              </div>
              <h2 className="font-semibold text-2xl text-gray-900">
                J. Vitor F.
              </h2>
              <p className="text-lg text-gray-900">Junior React Developer</p>
            </div>
            <p className="text-gray-900">
              Initially, I didn&apos;t have a great design in mind. So I just
              started coding and it turned out better than I expected (trust me,
              I thought worse). You will see two versions of my portfolio. There
              is an older one and a newer one.
            </p>
            <p className="text-gray-900">
              Initially, I didn&apos;t have a great design in mind. So I just
              started coding and it turned out better than I expected (trust me,
              I thought worse). You will see two versions of my portfolio. There
              is an older one and a newer one.
            </p>
            <p className="text-gray-900">
              Initially, I didn&apos;t have a great design in mind. So I just
              started coding and it turned out better than I expected (trust me,
              I thought worse). You will see two versions of my portfolio. There
              is an older one and a newer one.
            </p>
            <p className="text-gray-900">
              Initially, I didn&apos;t have a great design in mind. So I just
              started coding and it turned out better than I expected (trust me,
              I thought worse). You will see two versions of my portfolio. There
              is an older one and a newer one.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default AboutPage
