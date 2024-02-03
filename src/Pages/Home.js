import React from 'react'

const Home = () => {
  return (
    <div className='max-w-[100vw] min-h-[100vh] flex items-center justify-center text-center flex-col gap-5'>
        <p className='text-5xl font-bold uppercase '>Discover the power of Llama</p>
        <p className='text-xl font-medium px-96'>Democratizing access through an open platform featuring AI models, tools, and resources to give people the power to shape the next wave of innovation.</p>
        <p>Licensed for both research and commercial use</p>
        <button className=' bg-blue-500 px-10 p-3 rounded-full '>Download!</button>
    </div>
  )
}

export default Home



