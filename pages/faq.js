import { useState } from 'react'

const faqData = [
  {
    question: 'What is GreenGlow?',
    answer:
      'GreenGlow is a sustainable energy company that provides renewable energy solutions for households and businesses.',
  },
  {
    question: 'What types of renewable energy does GreenGlow offer?',
    answer:
      'GreenGlow offers a variety of renewable energy solutions including solar panels, wind turbines, and hydro power systems.',
  },
  {
    question: 'How can I contact GreenGlow?',
    answer:
      'You can contact GreenGlow by phone, email, or by filling out our online contact form.',
  },
]

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className='max-w-3xl mx-auto py-10'>
      {faqData.map((item, index) => (
        <div
          key={index}
          className='border-b border-gray-300 pb-4 my-10'
          onClick={() => handleClick(index)}
        >
          <div className='flex justify-between items-center cursor-pointer'>
            <h3 className='text-lg font-medium'>{item.question}</h3>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`h-6 w-6 transition-transform transform ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 14a.725.725 0 01-.52-.22L4.22 8.82a.75.75 0 111.06-1.06l4.95 4.95L14.72 7.5a.75.75 0 111.06 1.06l-5.5 5.5a.725.725 0 01-.52.22z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div
            className={`mt-4 ${
              activeIndex === index
                ? 'max-h-64 opacity-100'
                : 'max-h-0 opacity-0'
            } transition-all duration-500 ease-in-out overflow-hidden`}
          >
            <p className='text-gray-600'>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FaqAccordion
