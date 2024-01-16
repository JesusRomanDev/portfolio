import React, { useState } from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";


const Projects = ({slides}) => {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if(current === 0){
            return setCurrent(slides.length - 1)
        }else{
            return setCurrent(current -1)
        }
    }

    let nextSlide = () => {
        if(current === slides.length - 1){
            return setCurrent(0)
        }else{
            return setCurrent(current + 1)
        }
    }

  return (
    <>
        <div className="overflow-hidden relative">
            <h3 className='my-6 flex justify-center text-white font-bold text-3xl'>Projects</h3>
            <div className={`flex transition ease-in-out duration-500 translate-x-[-${current * 100}%]`}>
                {slides.map(s=>{
                return <img className='object-contain min-w-full' src={s.image} key={s.id} />
                })}
            </div>

            <div className='absolute top-0 h-full w-full flex justify-between items-center text-red-600 px-10 text-3xl'>
                <button onClick={previousSlide}>
                    <FaArrowCircleLeft />
                </button>
                <button onClick={nextSlide}>
                    <FaArrowCircleRight />
                </button>
            </div>

            <div className='absolute bottom-0 py-4 flex justify-center gap-10 w-full'>
                {slides.map((s)=> {
                    return <div onClick={()=>{setCurrent(s.id)}} key={s.id} className={` cursor-pointer rounded-full w-5 h-5 ${s.id==current ? "bg-white" : "bg-gray-700"}`}></div>
                })}
            </div>
        </div>
    </>
  )
}

export default Projects