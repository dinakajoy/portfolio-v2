import Link from 'next/link'
import styles from '@/styles/blog.module.css'

const PostBody = ({ content }) => {
  return (
    <div className={styles.postcontent}>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
