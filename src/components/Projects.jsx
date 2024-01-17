import React, { useState } from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";


const Projects = ({slides}) => {
    let [current, setCurrent] = useState(0);

    let lang = [
        {
            id:0,
            proyecto: 0,
            tech: "../../images/HTML5_badge.png"
    
        },
        {   
            id:1,
            proyecto: 0,
            tech: "../../images/css.png",
        },
        {   
            id:2,
            proyecto: 0,
            tech: "../../images/js.png"
        }
    ]

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
        <h3 className='py-6 flex justify-center text-white font-bold text-3xl'>Some Projects</h3>
        <section className="mb-6 overflow-hidden relative hover:scale-110 hover:duration-300 ease-out duration-300">
            <div className={`relative flex transition ease-in-out duration-500 translate-x-[-${current * 100}%]`}>
                {slides.map(s=>{
                return <img className='object-contain min-w-full' src={s.image} key={s.id} />
                })}
            </div>

            <div className='absolute top-0 h-full w-full flex justify-between items-center text-red-600 px-10 text-3xl'>
                <button className='z-40 hover:scale-125 hover:duration-300 ease-out duration-300' onClick={previousSlide}>
                    <FaArrowCircleLeft />
                </button>
                <button className='z-40 hover:scale-125 hover:duration-300 ease-out duration-300' onClick={nextSlide}>
                    <FaArrowCircleRight />
                </button>
            </div>

            <div className='z-40 absolute bottom-0 py-4 flex justify-center gap-10 w-full'>
                {slides.map((s)=> {
                    return <div onClick={()=>{setCurrent(s.id)}} key={s.id} className={`hover:scale-125 hover:duration-300 ease-out duration-300  cursor-pointer rounded-full w-5 h-5 ${s.id==current ? "bg-white" : "bg-gray-700"}`}></div>
                })}
            </div>

            <div className='absolute bottom-12 left-0 flex w-full'>
                {lang.map(t =>{
                    return <div key={t.id}><img className={`max-w-20 hover:scale-110 z-30 ${t.proyecto === current ? 'opacity-100' : 'opacity-0'}`} key={t.id} src={t.tech} /></div>
                })}
            </div>
        </section>
    </>
  )
}

export default Projects