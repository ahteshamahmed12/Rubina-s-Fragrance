import React from 'react'

const Loader = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-white'>
        <div className='flex space-x-2'>
           <div className='w-8 h-8 bg-blue-500 rounded-full animate-bounce' style={{animationDelay: '0s'}}>

            </div>

            <div className='w-8 h-8 bg-purple-500 rounded-full animate-bounce' style={{animationDelay: '0.2s'}}>

            </div>

            <div className='w-8 h-8 bg-pink-500 rounded-full animate-bounce' style={{animationDelay: '0.4s'}}>

            </div>
        </div>
    </div>
  )
}

export default Loader