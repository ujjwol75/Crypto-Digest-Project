
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
