import Image from 'next/image'
import urlBuilder from '@sanity/image-url'
import client from '../../client'

export const ImageComponent = ({ value }: any) => {
  return (
    <div className="relative w-full aspect-video mb-4">
      <Image
        src={urlBuilder(client).image(value).url()}
        alt={value.alt || 'Imagem do body'}
        fill
        priority
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        style={{ objectFit: 'cover', borderRadius: '4px' }}
      />
    </div>
  )
}

export const ListItemComponent = ({ children }: any) => (
  <li className="list-disc ml-4">{children}</li>
)

export const UnorderedListComponent = ({ children }: any) => (
  <ul className="mb-4">{children}</ul>
)

export const AnchorComponent = ({ value, children }: any) => (
  <a href={value} className="text-blue-500 hover:underline">
    {children}
  </a>
)

export const ParagraphComponent = ({ children }: any) => (
  <p className="mb-4">{children}</p>
)

export const Heading2Component = ({ children }: any) => (
  <h2 className="text-xl font-bold mb-4">{children}</h2>
)

export const Heading1Component = ({ children }: any) => (
  <h1 className="text-2xl font-bold mb-4">{children}</h1>
)
