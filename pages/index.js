import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/banner/Banner';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name='description' content='Netflix clone app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Netflix Clone</h1>

      <Banner
        title='Pirates of the Caribbean'
        subTitle='The Curse of the Black Pearl'
        imgUrl='/static/pirates.jpg'
      />
    </div>
  );
}
