import { ChakraProvider, Button, Text } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { AppContextProvider } from '../context/Context';
import Head from 'next/head';
import { HamburgerIcon, TimeIcon, AddIcon } from '@chakra-ui/icons';
import NavButton from '../components/navButton';
import { InitializeBD } from '../utils/storage';

function MyApp({ Component, pageProps }) {
  InitializeBD();
  return (
    <AppContextProvider>
      <ChakraProvider>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>Round Counter</title>

          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#1a202c" />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/icons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/icons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/icons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/icons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/icons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/icons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/icons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
        </Head>
        <Flex height="100vh" flexDirection="column">
          <Text
            backgroundColor="gray.800"
            color="gray.100"
            fontSize="2rem"
            textAlign="center"
          >
            Round-Counter
          </Text>
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            backgroundColor="gray.200"
          >
            <NavButton title="Listado" route="/">
              <HamburgerIcon w={6} h={6} />
            </NavButton>
            <NavButton title="Contador" route="/project">
              <TimeIcon w={6} h={6} />
            </NavButton>
            <NavButton title="Nuevo" route="/addProject">
              <AddIcon w={6} h={6} />
            </NavButton>
          </Flex>
          <Flex height="90vh" flexDirection="column" alignItems="center" pt={5}>
            <Component {...pageProps} />
          </Flex>
        </Flex>
      </ChakraProvider>
    </AppContextProvider>
  );
}

export default MyApp;
