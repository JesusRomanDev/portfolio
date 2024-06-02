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
        <section id='projects' className='w-[90%] sm:w-[30%] m-auto pb-8'>
            <h3 className='pt-10 flex justify-center text-white font-bold text-3xl'>Some Projects</h3>
            <div className="w-full overflow-hidden relative hover:scale-110 hover:duration-300 ease-out duration-300">
                <div style={{transform:`translateX(-${current * 100}%)`}} className={`relative mt-4 flex transition ease-in-out duration-500`}>
                    {slides.map(s=>{
                    return <img alt={s.alt} className='object-contain min-w-full' src={s.image} key={s.id} />
                    })}
                </div>
                <div className='absolute z-40 top-0 buttonVerMas'>
                    <div className='icono'><svg className='inline-block mt-2 ml-2' viewBox="0 0 256 250" width="30" height="30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                        <path 
                            d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
                        </svg>
                    </div>
                    <div className='inline-block py-3'>
                        <span className='spanGithub'>Ver Repositorio</span> 
                    </div>
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
            
            <div className='bottom-12 mt-5 left-0 flex flex-col sm:w-full border-2 rounded p-2'>
                    {details.map(m=> {
                        return (
                        <div key={m.id}>
                            <p className=' text-red-400 font-bold'>{m.titulo}</p>
                            <p className='my-5 text-white'>{m.descripcion}</p>
                        </div>) 
                    })}
                    <div className='flex flex-wrap justify-center items-center gap-2'>
                    {project.map(t =>{
                        return <div className='flex items-center' key={t.id}><img className={`max-w-10 md:max-w-12 hover:scale-110 z-30`} alt={t.alt} key={t.id} src={t.tech} /></div>
                    })}
                    </div>
                </div>
        </section>
    </>
  )
}

export default Projects