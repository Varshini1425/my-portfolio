import React from 'react'

import html from '../assets/html.png';
import css from '../assets/css.png';
import javaScript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import reduxImage from '../assets/redux.png';
import routerImage from '../assets/router.png';
import jextTest from '../assets/Jest.png';



const Experience = () => {

    const techs=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javaScript,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:reactImage,
            title:'React',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:reduxImage,
            title:'Reduc',
            style:'shadow-violet-600'
        },
        {
            id:7,
            src:routerImage,
            title:'Router',
            style:'shadow-red-600'
        },
        {
            id:7,
            src:jextTest,
            title:'Jest',
            style:'shadow-red-800'
        },
        {
            id:8,
            src:github,
            title:'GitHub',
            style:'shadow-gray-400'
        },
    ]


  return (
    <div name='experience' className='bg-gradient-to-t from-gray-700
    to-slate-950 w-full min-h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full min-h-full text-slate-200'>
            <div>
                <p className='text-4xl font-bold border-b-4
                border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3
            gap-8 text-center py-8 px-12 sm:px-0'>


            {techs.map(({id,src,title,style})=>(

                <div key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src ={src} alt='' className='w-20 mx-auto '></img>
                <p className='mt-4'>{title}</p>
                </div>

            ))}


            </div>  

        </div>
    </div>
  )
}

export default Experience