import React from 'react'

const Generate = () => {
  return (
    <div className='bg-purple-300 min-h-screen grid grid-cols-2'>
        <div className="col1 flex items-center justify-center flex-col">
            <h1>Create your BitTree</h1>
            <div className='flex flex-col gap-5'>
                <input className='bg-white' type="text" placeholder='Enter link text' />
                <input className='bg-white' type="text" placeholder='Enter link' />
            </div>
        </div>
        <div className="col2 w-full h-screen bg-purple-300 ">
            <img className='h-full object-contain' src="/banner-signup-desktop.eaeeeb085d7eb098.png" alt="" />
        </div>
    </div>
  )
}

export default Generate