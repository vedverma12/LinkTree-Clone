import React from 'react'

const Generate = () => {
    return (
        <div className='bg-[#d5a334] min-h-screen grid grid-cols-2'>
            <div className="col1 flex items-center justify-center flex-col">
                <div className='flex flex-col gap-5 my-8'>
                <h1 className='font-bold text-4xl'>Create your BitTree</h1>
                <div className="item ">
                    <h2 className='font-semibold text-2xl'>Step 1: Claim your Handle</h2>
                    <div className=" mt-2">
                        <input className='bg-white px-4 py-2 focus:outline-pink-500 rounded-full' type="text" placeholder='Choose a Handle' />
                    </div>
                </div>
                <div className="item">
                    <h2 className='font-semibold text-2xl'>Step 2: Add Links</h2>
                    <div className=" mt-2 flex gap-2">
                        <input className='bg-white px-4 py-2 focus:outline-pink-500 rounded-full' type="text" placeholder='Enter link text' />
                        <input className='bg-white px-4 py-2 focus:outline-pink-500 rounded-full' type="text" placeholder='Enter link' />
                        <button className=' p-5 py-2 mx-2 bg-slate-900 text-white font-bold rounded-3xl'>Add Link</button>
                    </div>
                </div>
                <div className="item">
                    <h2 className='font-semibold text-2xl'>Step 3: Add Picture and Finalize</h2>
                    <div className=' mt-2'>
                        <input className='bg-white px-4 py-2 focus:outline-pink-500 rounded-full' type="text" placeholder='Enter link to your Picture' />
                    </div>
                </div>
                </div>
            </div>
            <div className="col2 w-full h-screen bg-[#d5a334] ">
                <img className='h-full object-contain' src="/banner-signup-desktop.eaeeeb085d7eb098.png" alt="" />
            </div>
        </div>
    )
}

export default Generate