import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import 'common/assets/css/flaticon.css';
import 'common/assets/css/icon-example-page.css';
// swiper bundle styles
import 'swiper/css/bundle';
import 'common/assets/css/react-slick.css';
import 'common/assets/css/rc-collapse.css';
import 'rc-collapse/assets/index.css';
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import * as gtag from "../services/gtag"

export default function CustomApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=$G-Y2EXFZN5YE`}
      />

      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y2EXFZN5YE', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Modal>
        <Component {...pageProps} />
      </Modal>
    </>
  );
}
