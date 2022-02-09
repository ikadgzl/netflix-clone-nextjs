import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { magic } from '../lib/magic';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const manageRouting = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();

      if (isLoggedIn) {
        router.push('/');
      } else {
        router.push('/login');
      }
    };

    router.events.on('routeChangeComplete', () => setIsLoading(false));
    router.events.on('routeChangeError', () => setIsLoading(false));

    manageRouting();

    return () => {
      router.events.off('routeChangeComplete');
      router.events.off('routeChangeError');
    };
  }, [router]);

  //TODO: put loading
  return isLoading ? 'loading..' : <Component {...pageProps} />;
}

export default MyApp;
