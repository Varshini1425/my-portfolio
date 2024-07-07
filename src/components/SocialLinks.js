import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      text: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      href: 'https://www.linkedin.com/in/swarna-varrsini-s/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      text: 'GitHub',
      icon: <FaGithub size={24} />,
      href: 'https://github.com/Varshini1425',
    },
    {
      id: 3,
      text: 'Mail',
      icon: <HiOutlineMail size={24} />,
      href: 'mailto:varshinisugavanesh@gmail.com',
      style: 'rounded-tr-md',
    },
    {
      id: 4,
      text: 'Resume',
      icon: <BsFillPersonLinesFill size={24} />,
      href: '/resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={`flex justify-start items-center w-40 h-14 px-4 text-slate-200 ml-[-100px] hover:ml-[-30px] hover:rounded-md duration-300 bg-gray-400 ${link.style}`}
          >
            <a
              href={link.href}
              className='flex items-center justify-between w-full h-full px-4'
              download={link.download}
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>{link.text}</span>
              {link.icon} {/* Display the icon on the right */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
