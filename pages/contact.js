import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [form, setForm] = useState('')

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()

    if (inputs.name && inputs.email && inputs.subject && inputs.message) {
      setForm({ state: 'loading' })
      try {
        const res = await axios.post('/api/contact', inputs)

        const { error } = await res.data

        if (error) {
          setForm({
            state: 'error',
            message: error,
          })
          return
        }

        setForm({
          state: 'success',
          message: 'Your message was sent successfully.',
        })
        setInputs({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } catch (error) {
        setForm({
          state: 'error',
          message: 'Something went wrong',
        })
      }
    }
  }

  return (
    <div className='flex flex-col items-center py-8'>
      <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
      <form className='w-full max-w-lg' onSubmit={(e) => onSubmitForm(e)}>
        <div className='flex flex-wrap -mx-3 mb-4'>
          <div className='w-full px-3 mb-6'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='name'
              type='text'
              value={inputs.name}
              onChange={handleChange}
              placeholder='Name'
              required
            />
          </div>
          <div className='w-full px-3 mb-6'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='email'
              type='email'
              value={inputs.email}
              onChange={handleChange}
              placeholder='Email'
              required
            />
          </div>
          <div className='w-full px-3 mb-6'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='subject'
            >
              Subject
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='subject'
              type='text'
              value={inputs.subject}
              onChange={handleChange}
              placeholder='Subject'
              required
            />
          </div>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='message'
              value={inputs.message}
              onChange={handleChange}
              placeholder='Message'
              required
            ></textarea>
          </div>
        </div>
        {form.state === 'error' && (
          <p className='text-red-500'>{form.message}</p>
        )}
        {form.state === 'success' && (
          <p className='text-green-500'>{form.message}</p>
        )}
        <div className='flex items-center justify-center'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
