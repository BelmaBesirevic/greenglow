import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='sticky top-[100vh] bg-gray-900 text-gray-100'>
      <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          <div>
            <Image
              src='/logo.svg'
              alt='GreenGlow'
              className='h-8'
              width={120}
              height={40}
            />
            <p className='mt-2 text-sm'>
              © 2023 GreenGlow. All rights reserved.
            </p>
          </div>
          <div className='flex space-x-4'>
            <Link href='/'>
              <span className='text-gray-300 hover:text-white'>
                Privacy Policy
              </span>
            </Link>
            <Link href='/' className='text-gray-300 hover:text-white'>
              <span>Terms of Service</span>
            </Link>
            <Link href='/contact'>
              <span className='text-gray-300 hover:text-white'>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
