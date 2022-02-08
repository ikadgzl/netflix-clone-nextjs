import Card from './card';
import Link from 'next/link';
import clsx from 'classnames';
import styles from './section-cards.module.css';

const SectionCards = ({ title, videos = [], size }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={clsx(styles.cardWrapper)}>
        {videos.length > 0
          ? videos.map((video) => (
              <Card
                key={video.id}
                id={video.id}
                imgUrl={video.imgUrl}
                size={size}
              />
            ))
          : 'loading..'}
      </div>
    </section>
  );
};

export default SectionCards;
