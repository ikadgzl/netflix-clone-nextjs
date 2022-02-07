import Head from 'next/head';
import Banner from '../components/banner/banner';
import SectionCards from '../components/card/section-cards';
import Navbar from '../components/nav/navbar';
import styles from '../styles/Home.module.css';

const dummy = [
  { id: 0, imgUrl: '/static/pirates.jpg' },
  { id: 1, imgUrl: '/static/pirates.jpg' },
  { id: 2, imgUrl: '/static/pirates.jpg' }
];

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

      <div className={styles.sectionWrapper}>
        <SectionCards title='Large Movies' videos={dummy} size='large' />
        <SectionCards title='Medium Movies' videos={dummy} size='medium' />
        <SectionCards title='Small Movies' videos={dummy} size='small' />
      </div>
    </div>
  );
}
