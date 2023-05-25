import React from "react";
import {AiOutlineRight} from 'react-icons/ai'
import ReactPlayer from "react-player";
// import "../styles/introScreen.css"
import logo from '../../assests/imagebga.png';
import { Link } from 'react-router-dom';

const Welcomepage = () => {
    return(
        <div>
        <div className='h-screen bg-gradient-to-t from-indigo-300 overflow-hidden relative'>
        
        {/* intro content */}
        {/* image */}
        
        {/* <img className=' absolute right-0 bottom-0 lg:left-0 mx-auto object-cover xl:h-[48rem] md:h-[32rem] sm:h-[18rem]' src={avatar} alt=''/> */}
        
        {/* circle */}
        <div className='hidden lg:block absolute right-0 left-0 -bottom-1/4 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10'></div>

        {/* animated text */}
        <div className='absolute top-24 left-2'>
            <img className="" src={logo} alt="Image"/>
            

              <p className='lg:hidden text-slate-600 py-4 max-w-md text-sm'>
                <h2 className='font-semibold text-indigo-800'>The Beats Solution</h2>
                Provider of<span className='text-indigo-700'>music beats</span> for all who want to listen 
             </p>
              
            
        </div>

        {/* text */}
        <div className=' hidden lg:flex flex-col gap-5 rounded-md shadow-xl absolute top-0 bottom-0 m-auto right-10 bg-[#e4e8fa] p-6 h-fit w-1/3'>
            
            <h1 className='text-4xl font-bold text-indigo-900'>BEAT IT </h1>
            <p className='text-gray-600'>
            <h2 className='font-semibold text-indigo-800'>The Beats Solution</h2>
                Provider of<span className='text-indigo-700'>music beats</span> for all who want to listen
            </p>
            <div>
            <Link to={"/music"}   className=" flex  items-center justify-center bg-blue-400 text-black p-4 rounded-lg h-auto w-auto border-gray-400">Stream
            <span> <AiOutlineRight className='ml-2 group-hover:rotate-90 duration-200'/> </span></Link>
            </div>
        </div>
        
       </div>
        <ReactPlayer 
              className="react-player"
              url="//www.youtube.com/embed/lf6refTxQs8?autoplay=1&mute=1&start=1"
              width="0%"
              height="0%"
              position="absolute"
              top="10000px"
              left="1000px"
              overflow="hidden"
              playing={true}
              loop={true}
            />
      </div>
    )
}

export default Welcomepage
