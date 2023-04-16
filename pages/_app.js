import { SessionProvider } from 'next-auth/react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <div className='flex flex-col min-h-screen'>
        <Announcement />
        <Header />
        <Component {...pageProps} />
        <Footer />
        </div>
    </SessionProvider>
  )
}
