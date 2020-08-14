// import '../styles/globals.css'
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "styles/theme";
import Head from "next/head";
import "react-vertical-timeline-component/style.min.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no, user-scalable=yes"
      />
    </Head>
    <ThemeProvider theme={DarkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default MyApp;
