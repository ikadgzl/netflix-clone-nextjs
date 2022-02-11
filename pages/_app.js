import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { magic } from '../lib/magic';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // const [isLoading, setIsLoading] = useState(false);

  // const router = useRouter();

  // const handleRouterEvent = () => {
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   const manageRouting = async () => {
  //     const isLoggedIn = await magic.user.isLoggedIn();
  //     if (isLoggedIn) {
  //       router.push('/');
  //     } else {
  //       router.push('/login');
  //     }
  //   };

  //   router.events.on('routeChangeComplete', () => handleRouterEvent);
  //   router.events.on('routeChangeError', () => handleRouterEvent);

  //   // manageRouting();

  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouterEvent);
  //     router.events.off('routeChangeError', handleRouterEvent);
  //   };
  // }, [router]);

  //TODO: put loading
  // isLoading ? 'loading..' :
  return <Component {...pageProps} />;
}

export default MyApp;
