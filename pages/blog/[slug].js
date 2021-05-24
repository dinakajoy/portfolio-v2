import { useRouter } from 'next/router'
import Link from 'next/link'
import ErrorPage from 'next/error'
import Head from 'next/head';
import { getPostBySlug, getAllPosts } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import Layout from '@/components/Layout'
import PostBody from '@/components/blog/post-body'
import Aside from '@/components/blog/aside'
import DateFormatter from '@/components/blog/date-formatter'
import styles from '@/styles/blog.module.css'

const Post = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <Layout>
        <Head>
          <title> {post.title} | Odinaka Joy </title>
        </Head>
        <div className="container">
          <div className={styles.blog}>
            <section>
              {router.isFallback ? (
                <h2> Loading… </h2>
              ) : (
                <>
                  <article className={styles.posto}>
                    <h1>{post.title}</h1>
                    <div className={styles.meta}>
                      <span className={styles.date}>
                        <DateFormatter dateString={post.date} />
                      </span>
                      <i className="fa fa-first-order"></i>
                      <span className={styles.tag}>
                        {post.tag}
                        {/* <Link as={`/tag/${post.slug}`} href="/tag/[slug]">
                          <a className="links">{post.tag}</a>
                        </Link> */}
                      </span>
                    </div>
                    <PostBody content={post.content} />
                  </article>
                </>
              )}
            </section>
            <Aside />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Post

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'tag',
    'content'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug
        }
      }
    }),
    fallback: false
  }
}
