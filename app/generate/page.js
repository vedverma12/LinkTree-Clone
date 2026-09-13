"use client"
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Generate = () => {

    const [link, setlink] = useState("")
    const [linktext, setlinktext] = useState("")
    const [handle, sethandle] = useState("")
    const [pic, setpic] = useState("")

    const addLink = async (text, link,handle) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "link": link,
            "linktext": text,
            "handle": handle
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        toast(result.message)
        setlink("")
        
        setlinktext("")
        
    }

    return (
        <div className='bg-[#d5a334] min-h-screen grid grid-cols-2'>
            
            <div className="col1 flex items-center justify-center flex-col text-gray-900">
                <div className='flex flex-col gap-5 my-8'>
                    <h1 className='font-bold text-4xl'>Create your BitTree</h1>
                    <div className="item ">
                        <h2 className='font-semibold text-2xl'>Step 1: Claim your Handle</h2>
                        <div className=" mt-2">
                            <input value={handle||""} onChange={e=>{sethandle(e.target.value)}} className='bg-white px-4 py-2 focus:outline-pink-500 rounded-full' type="text" placeholder='Choose a Handle' />
                        </div>
                    </div>
                    <div className="item">
                        <h2 className='font-semibold text-2xl'>Step 2: Add Links</h2>
                        <div className=" mt-2 flex gap-2">
                            <input value={link||""} onChange={e=>{setlink(e.target.value)}} className='bg-white px-4 py-2 focus:outline-pink-500 rounded-full' type="text" placeholder='Enter link text' />
                            <input value={linktext||""} onChange={e=>{setlinktext(e.target.value)}} className='bg-white px-4 py-2 focus:outline-pink-500 rounded-full' type="text" placeholder='Enter link' />
                            <button onClick={()=>addLink(linktext,link,handle)} className=' p-5 py-2 mx-2 bg-slate-900 text-white font-bold rounded-3xl'>Add Link</button>
                        </div>
                    </div>
                    <div className="item">
                        <h2 className='font-semibold text-2xl'>Step 3: Add Picture and Finalize</h2>
                        <div className=' mt-2 flex flex-col'>
                            <input value={pic||""} onChange={e=>{setpic(e.target.value)}} className='bg-white px-4 py-2 focus:outline-pink-500 rounded-full' type="text" placeholder='Enter link to your Picture' />
                            <button className=' p-5 py-2 w-fit my-5 bg-slate-900 text-white font-bold rounded-3xl'>Create your BitLink</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col2 w-full h-screen bg-[#d5a334] ">
                <img className='h-full object-contain' src="/banner-signup-desktop.eaeeeb085d7eb098.png" alt="" />
                <ToastContainer />
            </div>
        </div>
    )
}

export default Generate