import { getAllPosts } from '@/lib/api'
import MoreStories from '@/components/blog/more-stories'
import Layout from '@/components/Layout'
import styles from '@/styles/blog.module.css'

const Blog = ({ allPosts }) => {
  return (
    <Layout>
      <div className={styles.banner} />
      <div className="container">
        {allPosts.length < 1 && <div>Sorry, no posts yet...</div>}
        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      </div>
    </Layout>
  )
}

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'tag',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
