import Link from 'next/link'
import { IoCart } from 'react-icons/io5'

export default function Header() {
  return (
    <header className='bg-white border-b border-gray-200'>
      <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
        <nav>
          <ul className='flex space-x-6 items-baseline'>
            <Link href='/'>
              <span className='font-light text-2xl'>GreenGlow</span>
            </Link>
            <li>
              <Link href='/'>
                <span className='text-base'>All Products</span>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <span className='text-base'>Contact</span>
              </Link>
            </li>
            <li>
              <Link href='/faq'>
                <span className='text-base'>FAQ</span>
              </Link>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/'>
                <span className='text-gray-700 hover:text-gray-900'>
                  Log in
                </span>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <span className='text-gray-700 hover:text-gray-900'>
                  Sign up
                </span>
              </Link>
            </li>

            <li>
              <Link href='/'>
                <IoCart size={22} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
