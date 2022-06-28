import Footer from '../src/component/Footer';
import Header from '../src/component/Header';
import Navigation from '../src/component/Navigation';
import '../styles/globals.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <Header />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
