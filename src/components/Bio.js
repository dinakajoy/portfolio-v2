import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/bio.module.css';

const Bio = () => {
  return (
    <section className={styles.mybio}>
      <div className="container">
        <div className={styles.bio}>
          <h2>Basic Information</h2>
          <p><span>Name: </span>Odinaka Joy</p>
          <p><span>Professional Title: </span>Software Engineer</p>
          <p><span>What I do: </span>Speak, Mentor, Code</p>
          <p><span>Location: </span>Nigeria</p>
          <p><span>Socials: </span>@dinakajoy</p>
          <br />

          <br />
          <h3>Short Bio</h3>
          <p>Odinaka Joy is a Software engineer with specialization in full-stack web development</p>

          <br />
          <h3>Medium Bio</h3>
          <p>Odinaka Joy is a Software engineer with specialization in full-stack web development</p>
          <p>She loves to speak and write about tech and the web, hence she spends time uploading quality content to her <Link href="/blog"><a>blog</a></Link></p>

          <br />
          <h3>Long Bio</h3>
          <p>Odinaka Joy is a Software engineer with specialization in full-stack web development.</p>
          <p>She loves to speak and write about tech and the web, hence she spends time uploading quality content to her <Link href="/blog"><a>blog</a></Link></p>
          <p>Odinaka Joy is extremely passionate about education and technology. She drives the inclusion of kids and women in tech. She loves to mentor beginners in web development and guide people through their journey in tech. She believes in passion because that keeps one motivated despite all odds. One advice she always gives is <strong>"You can do whatever you set your mind on, just keep pushing"</strong>. {' '}Her favourite quote is - <strong>"A journey of a thousand miles begins with a step"</strong></p>
        </div>
        <div className={styles.bioimages}>
          <a href="/images/gallery/dinakajoy.png" download="Odinaka Joy" alt="Odinaka Joy" title="Click to download"><Image src="/images/gallery/dinakajoy.png" width={300} height={400} /></a>
          <a href="/images/gallery/dinakajoy2.png" download="Odinaka Joy" alt="Odinaka Joy" title="Click to download"><Image src="/images/gallery/dinakajoy2.png" width={300} height={400} /></a>
          <a href="/images/gallery/dinakajoy1.png" download="Odinaka Joy" alt="Odinaka Joy" title="Click to download"><Image src="/images/gallery/dinakajoy1.png" width={300} height={400} /></a>
          <a href="/images/gallery/dinakajoy3.png" download="Odinaka Joy" alt="Odinaka Joy" title="Click to download"><Image src="/images/gallery/dinakajoy3.png" width={300} height={400} /></a>
          <a href="/images/gallery/dinakajoy5.png" download="Odinaka Joy" alt="Odinaka Joy" title="Click to download"><Image src="/images/gallery/dinakajoy5.png" width={300} height={400} /></a>
          <a href="/images/gallery/dinakajoy4.png" download="Odinaka Joy" alt="Odinaka Joy" title="Click to download"><Image src="/images/gallery/dinakajoy4.png" width={300} height={400} /></a>
        </div>
      </div>
    </section>
  )
}

export default Bio
