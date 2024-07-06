import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div name='home' className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-gray-700 text-slate-200'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row h-full px-4 pt-24'>
        {/* Content Section */}
        <div className='md:w-1/2 flex flex-col justify-center items-center md:pr-8'>
          <h2 className='text-4xl sm:text-6xl text-slate-200 font-bold mb-4'>I'm a Frontend Developer</h2>
          <p className='mb-4 text-slate-400  text-center'>
            Dedicated Software Engineer with 2+ years of experience in Front-end Development, specializing in JavaScript and React. Proven track record in optimizing user interfaces, enhancing web performance, and leading integration projects. Seeking a challenging role to leverage my technical expertise and drive organizational growth.
          </p>
          <button className='text-whi w-fit px-6 py-3 my-2 flex items-center rounded-md
          bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
            About
            <span className='hover:rotate-90 duration-300'><MdOutlineKeyboardDoubleArrowRight/></span>
          </button>
        </div>
        {/* Image Section */}
        <div className='md:w-1/2 flex items-center justify-center mt-8 md:mt-0'>
          <img src={HeroImage} alt='my profile' className='rounded-full  mx-auto w-full md:max-w-lg lg:max-w-xl'></img>
        </div>
    </div>
    </div>
  );
}

export default Home;
