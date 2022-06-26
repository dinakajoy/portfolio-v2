import Head from 'next/head';

const Meta = ({title, description, image, url}) => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="theme-color" content="#000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="robots" content="follow, index" />
      <meta name="author" content="Odinaka Joy" />
      <meta name="msapplication-TileImage" content={image} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Odinaka Joy Portfolio Website" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@dinakajoy" />
      <meta name="twitter:creator" content="@dinakajoy" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Odinaka Joy" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <title>{title}</title>
    </Head>
  )
}

export default Meta;

Meta.defaultProps = {
  title: 'Welcome | Odinaka Joy',
  description:
    'Odinaka Joy is a Software Engineer based in Port Harcourt, Nigeria. She loves to build websites and infrastructures. She mentor and train beginners in web development. She also loves speak and write about tech, open source, software engineering and the web',
  image:
    'https://res.cloudinary.com/dbniq3vnh/image/upload/v1614522391/accomplice/odinaka-joy.jpg',
  url: 'https://dinakajoy.com'
}
