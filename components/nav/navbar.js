import { useEffect, useState } from 'react';
import styles from './navbar.module.css';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { magic } from '../../lib/magic';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState('');

  const router = useRouter();

  const handleShowDropdown = (e) => {
    e.preventDefault();

    setShowDropdown(!showDropdown);
  };

  const handleSignout = async () => {
    try {
      await magic.user.logout();

      router.push('/login');
    } catch (error) {
      console.log(error);
      router.push('/login');
    }
  };

  // TODO: take care of trying to update setUsername after component unmount, memory leak
  useEffect(() => {
    const getMetadata = async () => {
      try {
        const { email } = await magic.user.getMetadata();

        setUsername(email);
      } catch (error) {
        console.log(errror);
      }
    };

    getMetadata();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href='/'>
          <a className={styles.logoLink}>
            <div className={styles.logoWrapper}>
              <Image
                src='/static/netflix.svg'
                alt='Netflix logo'
                width='128px'
                height='34px'
              />
            </div>
          </a>
        </Link>

        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.navItem2}>
            <Link href='/browse/my-list'>
              <a>My List</a>
            </Link>
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              <Image
                src={'/static/expand_more.svg'}
                alt='Expand dropdown'
                width='24px'
                height='24px'
              />
            </button>

            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <a className={styles.linkName} onClick={handleSignout}>
                    Sign out
                  </a>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
