import { useEffect, useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';
import { magic } from '../lib/magic';
import { route } from 'next/dist/server/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleRouterEvent = () => {
    setIsLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email) {
      try {
        setIsLoading(true);
        const dIdToken = await magic.auth.loginWithMagicLink({ email });

        if (dIdToken) {
          router.push('/');
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', () => handleRouterEvent);
    router.events.on('routeChangeError', () => handleRouterEvent);

    return () => {
      router.events.off('routeChangeComplete', handleRouterEvent);
      router.events.off('routeChangeError', handleRouterEvent);
    };
  }, [router]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.headerWrapper}>
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
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>

          <form onSubmit={handleLogin}>
            <input
              required
              type='email'
              placeholder='Email address'
              className={styles.emailInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type='submit' className={styles.loginBtn}>
              {isLoading ? 'Loading...' : 'Sign In'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
