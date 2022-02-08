import Head from 'next/head';
import Banner from '../components/banner/banner';
import SectionCards from '../components/card/section-cards';
import Navbar from '../components/nav/navbar';
import { getCommonVideos, getPopularVideos } from '../lib/videos';
import styles from '../styles/Home.module.css';

export default function Home({
  disneyVideos,
  travelVideos,
  productivityVideos,
  popularVideos
}) {
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

      <div className={styles.sectionWrapper}>
        <SectionCards title='Disney' videos={disneyVideos} size='large' />
        <SectionCards title='Travel' videos={travelVideos} size='small' />
        <SectionCards
          title='Productivity'
          videos={productivityVideos}
          size='medium'
        />
        <SectionCards title='Popular' videos={popularVideos} size='small' />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const disneyVideos = await getCommonVideos('disney trailer');
  const travelVideos = await getCommonVideos('travel');
  const productivityVideos = await getCommonVideos('productivity');
  const popularVideos = await getPopularVideos();

  return {
    props: { disneyVideos, travelVideos, productivityVideos, popularVideos }
  };
}
