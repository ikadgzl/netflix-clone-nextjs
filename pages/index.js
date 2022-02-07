import Head from 'next/head';
import Banner from '../components/banner/banner';
import Card from '../components/card/card';
import Navbar from '../components/nav/navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name='description' content='Netflix clone app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Banner
        title='Pirates of the Caribbean'
        subTitle='The Curse of the Black Pearl'
        imgUrl='/static/pirates.jpg'
      />
      <Card />
    </div>
  );
}
