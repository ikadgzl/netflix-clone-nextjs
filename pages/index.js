import Head from 'next/head';
import Image from 'next/image';
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
    </div>
  );
}
