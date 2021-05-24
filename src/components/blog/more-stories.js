import PostPreview from '@/components/blog/post-preview';
import Aside from '@/components/blog/aside';
import styles from '@/styles/blog.module.css';

const MoreStories = ({ posts }) => {
  return (
    <div className={styles.blog}>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              tag={post.tag}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </section>
      <Aside />
    </div>
  )
}

export default MoreStories
