import Document from '../_document'
import Image from 'next/image'
import { getAllProductHandles, getProductByHandle } from '../../lib/shopify'
import { formatter } from '../../utils/helpers'

export default function ProductPage({ product }) {
  const { title, images } = product
  const price = product.priceRange.minVariantPrice.amount
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          <div className='flex justify-center'>
            <Image
              src={images.edges[0].node.originalSrc}
              alt={images.edges[0].node.altText}
              width={400}
              height={400}
            />
          </div>
          <div>
            <h1 className='text-3xl font-medium text-gray-900 mb-6'>{title}</h1>
            <div className='mb-6'>
              <div
                className='mt-10'
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
              <span className='my-4 font-medium inline-block bg-gray-100 rounded px-3 py-1 text-md text-gray-700 mr-2 mb-2 '>
                Price: {formatter.format(price)}
              </span>
            </div>
            <div className='mb-6'>
              <label htmlFor='quantity' className='text-gray-700 font-medium'>
                Quantity:
              </label>
              <input
                id='quantity'
                type='number'
                className='ml-2 rounded-md w-20 py-1 px-3 text-gray-700'
                name='quantity'
                defaultValue={1}
                max={1000}
              />
            </div>
            <div>
              <button className=' w-2/4 border-2 border-slate-500 hover:border-slate-600 text-slate font-light py-1 px-2 shadow-md my-2'>
                Buy Now
              </button>
            </div>
            <div>
              <button className=' w-2/4 bg-green-500 hover:bg-green-600 text-white font-light py-1 px-2 shadow-md'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const handles = await getAllProductHandles()

  const paths = handles.map((handle) => ({
    params: {
      handle: handle,
    },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const handle = params.handle
  const product = await getProductByHandle(handle)

  return {
    props: { product },
  }
}
