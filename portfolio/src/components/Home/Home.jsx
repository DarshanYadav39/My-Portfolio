import React from 'react'
import avatarImg from "../../assets/working 2.png"
import TextChange from '../TextChange'

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between item-start p-10 md:p-20'>Home
    <div className='md:w-2/4 md:pt-10 '>
    <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
               <TextChange/>
    </h1>
    <p className='text-sm md:text-2xl tracking-tight '>A passionate and detail-oriented developer driven by curiosity and creativity. 
      I specialize in building responsive, user-centric web applications.
      I'm constantly learning, experimenting with new tools, and pushing myself to grow in the fast-evolving tech landscape.
      Let’s build something amazing together.
    </p>
    <a href="#Footer">
    <button 
        className='mt-5 md:md-10 text-white py02 px03 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
        Contact Me</button>
    </a>
    </div>
    <div>
        <img className='' src={avatarImg} alt="" />
    </div>
     </div>
  )
}

export default Home
