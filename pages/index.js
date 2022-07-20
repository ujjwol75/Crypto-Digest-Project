import Head from 'next/head';
import Image from 'next/image';
import Homebanner from '../src/component/home/Homebanner';
import HomeCryptoNews from '../src/component/home/HomeCryptoNews';

export default function Home() {
  return (
    <>
      <title>CryptoDigest - Home</title>
      <meta property="og:title" content={"CryptoDigest - Home<"} />
      <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
      <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
      <meta name="twitter:title" content={"CryptoDigest - Home<"} />
      <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
      <meta property="og:type" content="article" />
      {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
      <meta property="fb:app_id" content={"1144829116095615"} />
      <Homebanner />
      <HomeCryptoNews />
    </>
  )
}
