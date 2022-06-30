import Author from './author'

interface PostType {
  slug: string
  fields: {
    title: string
    date: string
    coverImage: string
    author: Author

    ogImage: {
      url: string
    }
  }
  excerpt: string
  content: string
}

export default PostType
