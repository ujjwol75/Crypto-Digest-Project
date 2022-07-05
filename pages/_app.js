import Footer from '../src/component/Footer';
import Header from '../src/component/Header';
import Navigation from '../src/component/Navigation';
import '../styles/globals.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Layout from '../src/component/Layout';

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
