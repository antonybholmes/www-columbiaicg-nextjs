import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Container from "../../components/container"
import PostBody from "../../components/post-body"
import Header from "../../components/header"
import PostHeader from "../../components/post-header"
import Layout from "../../components/layout"
import { getPostBySlug, getAllPosts } from "../../lib/api"
import PostTitle from "../../components/post-title"
import Head from "next/head"
import { CMS_NAME } from "../../constants"
import markdownToHtml from "../../lib/markdownToHtml"
import PostType from "../../types/post"

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.fields.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.fields.ogImage.url} />
              </Head>
              <PostHeader
                title={post.fields.title}
                coverImage={post.fields.coverImage}
                date={post.fields.date}
                author={post.fields.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug)

  const content = await markdownToHtml(post.fields.content || "")

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
