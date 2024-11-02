import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Keisuke Matsumoto</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="Keisuke Matsumoto" />
        <meta property="og:description" content="Keisuke Matsumoto's portfolio site" />
        <meta property="og:url" content="https://matsumokei.github.io/" />
        <meta property="og:site_name" content="Keisuke Matsumoto" />
        <meta property="og:type" content="type" />
        <meta property="og:image" content="https://github.com/matsumokei/matsumokei.github.io/blob/main/public/matsumokei.jpg?raw=true" />
        <link rel="shortcut icon" href="https://github.com/matsumokei/matsumokei.github.io/blob/main/public/matsumokei.jpg?raw=true" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
