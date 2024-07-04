import React from 'react'
import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"; 

const Home = () => {
  return (
    <div name='home' className='h-screen w-ful bg-gradient-to-b from-slate-950 to-gray-800 text-slate-200'>
        <div>
            <div className='max-w-s mx-auto flex-col items-center justify-center h-full px-4 pt-24 md:flex-row'>
                <h2>I'm a Front end Developer</h2>
                <p>Dedicated Software Engineer with 2+ years of experience in Front-end Development, specializing in
                JavaScript and React. Proven track record in optimizing user interfaces, enhancing web
                performance, and leading integration projects. Seeking a challenging role to leverage my technical
                expertise and drive organizational growth.</p>
                <div>
                    <button>
                        About
                        <span><MdOutlineKeyboardDoubleArrowRight/></span>
                        
                    </button>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt='my profile' className=' rounded-2xl mx-auto w-40'></img>
            </div>
        </div>

    </div>
  )
}

export default Home