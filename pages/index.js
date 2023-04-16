import Head from 'next/head'
import ProductCard from '../components/ProductCard'
import { getAllProducts } from '../lib/shopify'

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>GreenGlow - Natural Energy Drinks</title>
        <meta
          name='description'
          content='GreenGlow offers a variety of natural energy drinks made from high-quality, organic ingredients. Find the perfect energy boost for your day.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='canonical' href='https://www.greenglow.com' />
        <meta property='og:title' content='GreenGlow - Natural Energy Drinks' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.greenglow.com' />
        <meta
          property='og:description'
          content='GreenGlow offers a variety of natural energy drinks made from high-quality, organic ingredients. Find the perfect energy boost for your day.'
        />
        <meta
          property='og:image'
          content='https://www.greenglow.com/images/greenglow-can.jpg'
        />
        <meta
          property='og:image:alt'
          content='GreenGlow natural energy drink in a can'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-medium text-gray-900 mb-6'>
          Our Natural Energy Drinks
          </h2>
          <div className='flex flex-wrap gap-6 justify-center'>
            {products.map((product) => (
              <div
                key={product.node.id}
                className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const products = await getAllProducts()

  return {
    props: { products }
  }
}
