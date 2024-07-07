import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full min-h-screen bg-gradient-to-b from-gray-700 to bg-slate-950 text-slate-200'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col
            justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4
                    border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'> 
                    I am a dedicated Software Engineer with
                    over two years of experience specializing in front-end development
                    using JavaScript and React. My expertise lies in
                    developing and optimizing user interfaces, building responsive
                    front-end components, and enhancing web performance.
                    I have successfully collaborated with back-end developers
                    to integrate front-end components with server-side logic,
                    ensuring seamless data flow and consistent functionality across applications.
                    My work emphasizes improving user experience, optimizing load times,
                    and ensuring the overall responsiveness of web applications.
                    Additionally, I have a strong background in implementing
                    effective code management practices using Git,
                    which has streamlined team collaboration and maintained
                    high code quality.
                </p>
                <br></br>
                <p className='text-xl'>
                    Throughout my career, I have conducted thorough
                    testing and debugging of web applications to identify
                    and resolve issues, ensuring high reliability and usability.
                    I have utilized React Testing Library to create automated test
                    suites, guaranteeing the functionality and dependability of
                    front-end React applications through systematic testing.
                    My skills extend to working with various tools and
                    technologies, including MySQL, Redux, Tailwind, and Axios,
                    to build efficient and scalable applications. With a passion
                    for problem-solving and a commitment to continuous learning,
                    I am eager to leverage my technical expertise in a challenging
                    ̰role that contributes to organizational growth.
                </p>
            </div>
        </div>
    )
}

export default About