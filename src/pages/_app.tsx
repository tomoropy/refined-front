import '../styles/globals.css';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import type { AppProps } from 'next/app';

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({
    uri: 'http://localhost:8080/query', // Server URL (must be absolute)
  }),
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
