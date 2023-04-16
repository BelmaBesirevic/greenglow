import Link from 'next/link'
import Image from 'next/image'
import { formatter } from '../utils/helpers.js'

const ProductCard = ({ product }) => {
  const { handle, title } = product.node

  const { altText, originalSrc } = product.node.images.edges[0].node

  const price = product.node.priceRange.minVariantPrice.amount

  return (
    <Link href={`/products/${handle}`}>
      <div className='group block rounded-md overflow-hidden shadow-md hover:shadow-lg'>
        <div className='relative group-hover:opacity-85 h-0 pb-60'>
          <Image
            src={originalSrc}
            alt={altText}
            fill
            style={{ objectFit: 'contain' }}
            className='transform transition-all hover:scale-105'
          />
        </div>
        <div className='p-4'>
          <h3 className='text-gray-900 text-xl font-medium mb-2'>{title}</h3>
          <div className='w-full flex justify-between	items-center py-4'>
            <p className='text-gray-700 text-base font-light mb-2'>
              {formatter.format(price)}
            </p>
            <button className='bg-green-500 hover:bg-green-600 text-white font-light py-1 px-2 shadow-md'>
              View Product
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
