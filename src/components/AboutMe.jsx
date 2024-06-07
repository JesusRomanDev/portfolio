import {useTypewriter, Cursor} from 'react-simple-typewriter'
import FileSaver from 'file-saver';
const AboutMe = () => {
    const [text] = useTypewriter({
      words : ['Front End Developer', 'Mechatronics Engineer', "Lifelong Learner"],
      loop: {},
      deleteSpeed: 80
    });
    const saveFile = () => {
      FileSaver.saveAs(
      import.meta.env.PUBLIC_URL + "./../../public/img/EduardoRomanCVEnglish.pdf",
      "EduardoRomanCVEnglish.pdf");
    }
  return (
    <>
        <section id='about' className='mt-24 sm:mt-16 w-3/4 sm:w-4/5 pt-24 sm:py-24 mx-auto grid auto-rows-auto mb-5 sm:mb-0 sm:flex sm:gap-5 justify-center'>
            <div className='sm:w-1/2 flex flex-col justify-center text-white'>
                <h1 className='text-left block text-2xl sm:text-4xl'>Hi, my name is <span className='font-bold text-red-800'>Jesus Eduardo</span></h1>
                <h2 className='text-sm sm:text-base font-black mt-5'>
                    <span className='text-red-700'> {text}</span><Cursor cursorColor='red' />
                </h2>
                <p className='mt-5 font-semibold'>Based in <span className='text-red-500'>Monterrey Nuevo Leon, Mexico.</span> </p>
                <p className='text-sm sm:text-base font-semibold mt-5'>Graduated in Universidad Autonoma de Nuevo Leon as a <span className='text-red-500'>Mechatronics Engineer</span>, i'm a passionate person about the tech industry and everything that involves it, open to challenges, currently looking for my first job as a developer.</p>

                <p className='text-sm sm:text-base font-semibold'>Previously i had experience as a Product Engineer working with International Companies, but after some time i realized that i wanted to go after what i enjoy the most, to <span className='text-red-500'> &lt; code &gt; </span> .</p>
            </div>
            <div className='sm:w-1/4 flex flex-col justify-start sm:justify-center items-center'>
                <img className='w-3/4 sm:w-full sliderUp' src="img/dev.png" alt="dev" />
                <div>
                    <a onClick={saveFile}>
                    <button className='hover:bg-slate-400 hover:scale-110 hover:duration-300 ease-out duration-300 text-xl text-white font-semibold p-2 bg-slate-600 rounded-md'>Download CV</button>
                    </a>       
                </div>
            </div>
        </section>
    </>

  )
}

export default AboutMe