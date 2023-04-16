import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Announcement />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
