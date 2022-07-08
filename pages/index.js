import Head from 'next/head';
import Image from 'next/image';
import Homebanner from '../src/component/home/Homebanner';
import HomeCryptoNews from '../src/component/home/HomeCryptoNews';

export default function Home() {
  return (
  <>
      <Head>
        <title>CryptoPotato - Home</title>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.png"/>
      </Head>
     <Homebanner/>
     <HomeCryptoNews/>
  </>
  )
}
