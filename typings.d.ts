export interface PostProps {
  title: string
  caption: string
  categories: [string]
  _createdAt: string
  _updatedAt: string
  readingTime: string
  mainImage: object
  body: [object]
  slug: {
    current: string
    _type: string
  }
}
