import Footer from '@/component/Footer'
import Heading from '@/component/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Heading />
    <Component {...pageProps} />
    <Footer />
  </>
}
