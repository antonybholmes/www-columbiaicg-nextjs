import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Container from "../../components/container"
import PostBody from "../../components/post-body"
import Header from "../../components/header"
import PostHeader from "../../components/post-header"
import Layout from "../../components/layout"
import {
  getPostBySlug,
  getAllPosts,
  getPersonBySlug,
  getAllPeople,
} from "../../lib/api"
import PostTitle from "../../components/post-title"
import Head from "next/head"
import { CMS_NAME } from "../../constants"
import markdownToHtml from "../../lib/markdownToHtml"
import PostType from "../../types/post"

type Props = {
  post: PostType
}

const Post = ({ post: person }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !person?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {person.fields.firstName} | Next.js Blog Example with{" "}
                  {CMS_NAME}
                </title>
              </Head>
              <h1>
                {person.fields.firstName} {person.fields.lastName}
              </h1>
              <PostBody content={person.content} />
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
  const post = getPersonBySlug(params.slug)

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
  const people = getAllPeople()

  return {
    paths: people.map(person => {
      return {
        params: {
          slug: person.slug,
        },
      }
    }),
    fallback: false,
  }
}
