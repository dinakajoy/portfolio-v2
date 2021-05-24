import styles from '@/styles/blog.module.css';

const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <img src="/images/dinakajoy.png" alt="Odinaka Joy" />
      <div className={styles.author}>Odinaka Joy</div>
      <p className={styles.about}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, adipisci sunt. Hic quam non ipsam nisi fugit saepe facilis nostrum.</p>
    </div>
  )
}

export default Avatar
