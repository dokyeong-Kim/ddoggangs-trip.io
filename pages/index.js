import Image from 'next/image'
import Head from 'next/head'
import Layout from '@/components/layout';
import Hero from '../components/home/hero';


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>또갱의 몽골여행</title>
        <meta name='description' content='몽골에서 살아남기...'/>
        <link rel='icon' href='/favicon.ico'/>
      </Head>

      <Hero/>

    </Layout>

  )
}
