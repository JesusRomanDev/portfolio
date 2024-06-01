import React, { useEffect, useState } from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";


const Projects = ({slides}) => {
    let lang2 = [
        {
            id:0,
            proyecto: 0,
            tech: "img/HTML5_badge.png",
            alt: "HTML"
        },
        {   
            id:1,
            proyecto: 0,
            tech: "img/css.png",
            alt: "CSS"
        },
        {   
            id:2,
            proyecto: 0,
            tech: "img/js.png",
            alt: "JavaScript"
        },
        {   
            id:3,
            proyecto: 0,
            tech: "img/php.png",
            alt: "PHP"
        },
        {   
            id:4,
            proyecto: 0,
            tech: "img/mysql.png",
            alt: "mysql"
        }
    ]

    let lang3 = [
        {
            id:5,
            proyecto: 1,
            tech: "img/HTML5_badge.png",
            alt: "HTML"
        },
        {   
            id:6,
            proyecto: 1,
            tech: "img/css.png",
            alt: "CSS"
        },
        {   
            id:7,
            proyecto: 1,
            tech: "img/js.png",
            alt: "JavaScript"
        },
        {   
            id:8,
            proyecto: 1,
            tech: "img/react.png",
            alt: "React"
        },
        {   
            id:9,
            proyecto: 1,
            tech: "img/node.png",
            alt: "Node"
        },
        {   
            id:10,
            proyecto: 1,
            tech: "img/mongo.webp",
            alt: "MongoDB"
        }
    ]

    let lang4 = [
        {
            id:11,
            proyecto: 2,
            tech: "img/HTML5_badge.png",
            alt: "HTML"
        },
        {   
            id:12,
            proyecto: 2,
            tech: "img/css.png",
            alt: "CSS"
        },
        {   
            id:13,
            proyecto: 2,
            tech: "img/js.png",
            alt: "JavaScript"
        }
    ]

    let lang = [
        {
            id:12,
            proyecto: 3,
            tech: "img/HTML5_badge.png",
            alt: "HTML"
        },
        {   
            id:13,
            proyecto: 3,
            tech: "img/css.png",
            alt: "CSS"
        },
        {   
            id:14,
            proyecto: 3,
            tech: "img/js.png",
            alt: "JavaScript"
        },
        {
            id:18,
            proyecto: 3,
            tech: "img/bstrap.svg",
            alt: "Bootstrap"
        },
        {   
            id:15,
            proyecto: 3,
            tech: "img/node.png",
            alt: "NodeJS"
        },
        {   
            id:16,
            proyecto: 3,
            tech: "img/sequelize.png",
            alt: "Sequelize"
        },
        {   
            id:17,
            proyecto: 3,
            tech: "img/mysql.png",
            alt: "mysql"
        }
    ]

    let detallesArr=[[{titulo: "Agencia de Viajes", descripcion: "Project made as a Fullstack, using the MVC arquitecture pattern, technologies for the frontend such as HTML, CSS, JS, for the backend i used NodeJS w Express and Sequelize for the ORM, MySQL for the database, additionally it was needed a template engine and one available for express was Pug.The customer can search for travels around the world and verifying the site is secure with Testimonials of clients."}],[{titulo: "Real State w/ MVC", descripcion: "This project was made with technologies in the Frontend and Backend with a result of a FullStack project, Model View Controller arquitecture pattern was used, allowing sellers put any property in sale. CRUD is available with properties and sellers. Relational Database and Authentication are part of it aswell.", id:10}],[{titulo: "Administrador de Pacientes", descripcion: "This project was made with technologies in the frontend and backend with a result of a FullStack project. CRUD is available in this project, the doctor can create, read, update and delete any patients in the dashboard. HTML, CSS, JS and React are part of the Frontend and with the Backend NodeJS & Express for the Server side, as for the No Relational Database i used MongoDB. ", id:20}],[{titulo: "Mirai Anime Page",descripcion: "First project by my own, only with Frontend technologies. Working with HTML, CSS and JavaScript to make the page with some basic functions and learn the properties of CSS. With this project i was hooked up by coding and realize this i what i wanted to do for the rest of my life. Thanks for reading until here :)", id:30}], ]

    let [current, setCurrent] = useState(0);
    let [project, setProject] = useState(lang);
    let [details, setDetails] = useState(detallesArr[0]);


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

    useEffect(()=>{
        if(current === 0){
            return setProject(lang)
        }if (current === 1) {
            return setProject(lang2)
        } if(current === 2) {
            return setProject(lang3)
        } if(current === 3){
            return setProject(lang4)
        }
    }, [current])

    useEffect(()=>{
        if(current === 0){
            return setDetails(detallesArr[0])
        }if (current === 1) {
            return setDetails(detallesArr[1])
        } if(current === 2) {
            return setDetails(detallesArr[2])
        } if(current === 3){
            return setDetails(detallesArr[3])
        }
    }, [current])
    
  return (
    <>
        <section id='projects' className='w-[30%] m-auto pb-8'>
            <h3 className='pt-10 flex justify-center text-white font-bold text-3xl'>Some Projects</h3>
            <div className="w-full overflow-hidden relative hover:scale-110 hover:duration-300 ease-out duration-300">
                <div style={{transform:`translateX(-${current * 100}%)`}} className={`relative mt-4 flex transition ease-in-out duration-500`}>
                    {slides.map(s=>{
                    return <img alt={s.alt} className='object-contain min-w-full' src={s.image} key={s.id} />
                    })}
                </div>
                <div className='absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl'>
                    <button aria-label='previous slide' className='z-40 hover:scale-125 hover:duration-300 ease-out duration-300' onClick={previousSlide}>
                        <FaArrowCircleLeft />
                    </button>
                    <button aria-label='next slide' className='z-40 hover:scale-125 hover:duration-300 ease-out duration-300' onClick={nextSlide}>
                        <FaArrowCircleRight />
                    </button>
                </div>
                <div className='z-40 absolute bottom-0 py-4 flex justify-center gap-10 w-full'>
                    {slides.map((s)=> {
                        return <div onClick={()=>{setCurrent(s.id)}} key={s.id} className={`hover:scale-125 hover:duration-300 ease-out duration-300  cursor-pointer rounded-full w-5 h-5 ${s.id==current ? "bg-white" : "bg-gray-700"}`}></div>
                    })}
                </div>
                {/* <div className='absolute bottom-12 left-0 flex w-full'>
                    {details.map(m=> {
                        return <div key={m.id}><p>{m.titulo}</p></div> 
                    })}
                    {project.map(t =>{
                        return <div className='flex items-center' key={t.id}><img className={`max-w-20 hover:scale-110 z-30`} alt={t.alt} key={t.id} src={t.tech} /></div>
                    })}
                </div> */}
            </div>
            
            <div className='bottom-12 mt-5 left-0 flex flex-col w-full border-2 rounded p-2'>
                    {details.map(m=> {
                        return (
                        <div key={m.id}>
                            <p className=' text-red-400 font-bold'>{m.titulo}</p>
                            <p className='my-5 text-white'>{m.descripcion}</p>
                        </div>) 
                    })}
                    <div className='flex justify-center items-center gap-2'>
                    {project.map(t =>{
                        return <div className='flex items-center' key={t.id}><img className={`max-w-20 hover:scale-110 z-30`} alt={t.alt} key={t.id} src={t.tech} /></div>
                    })}
                    </div>
                </div>
        </section>
    </>
  )
}

export default Projects