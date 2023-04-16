import { useState } from 'react'
import { GrClose } from 'react-icons/gr'

const Announcement = () => {
  const [show, setShow] = useState(true)

  if (!show) {
    return null
  }
  return (
    <div className='bg-green-100 p-2 flex justify-between items-center'>
      <span className='text-green-800 text-center flex-1'>Welcome to our store</span>
      <GrClose className='cursor-pointer' onClick={() => setShow(!show)} />
    </div>
  )
}
export default Announcement
