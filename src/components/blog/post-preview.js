import Link from 'next/link'
import DateFormatter from '@/components/blog/date-formatter'
import styles from '@/styles/blog.module.css'

const PostPreview = ({
  title,
  date,
  excerpt,
  tag,
  slug,
}) => {
  return (
    <article className={styles.posts}>
      <h3 className={styles.title}>
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a className="links">{title}</a>
        </Link>
      </h3>
      <div className={styles.meta}>
        <span className={styles.date}>
          <DateFormatter dateString={date} />
        </span>
        <i className="fa fa-first-order"></i>
        <span className={styles.tag}>
          {tag}
          {/* <Link as={`/tag/${slug}`} href="/tag/[slug]">
            <a className="links">{tag}</a>
          </Link> */}
        </span>
      </div>
      <p className={styles.excerpt}>{excerpt}</p>
    </article>
  )
}

export default PostPreview
