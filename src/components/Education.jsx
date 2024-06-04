const Education = () => {
  return (
    <>
        <section id='education' className="pb-14">
            <div className='mt-5 mb-5 flex flex-col items-center sm:items-stretch sm:flex-row justify-center gap-x-5'>
              <div className='max-w-md w-3/4 sm:w-1/2 text-white border-r-4 border-r-slate-800 flex flex-col sm:items-end'>
                <h3 className='text-2xl font-bold self-center'>Education</h3>
                <div className='mt-48 mr-12 border-r-4 border-r-slate-100 bg-slate-700 p-5 relative'>
                  <span className='text-red-500 text-sm font-bold'>Universidad Autonoma de Nuevo León</span>
                  <p className='text-red-500 text-xl font-bold'>Mechatronics Engineer</p>
                  <p className='text-red-500 text-sm'>January 2015-December 2020</p>
                  <p>Engineering Degree in Mechatronics. Structured programming, microcontrollers, IA and neuronal networks are some of the asignatures that i've saw during my career aswell C++, JavaScript, Python and MathLAB are the languages with which I've worked with. </p>
                  <div className='absolute h-0.5 w-12 bg-slate-100 top-1/2 -right-12'>
                    <div className='relative bottom-1 block w-2.5 h-2.5 rounded-e-full rounded-t-full rounded-r-full rounded-b-full rounded-l-full left-full bg-slate-100'></div>
                  </div>
                </div>
              </div>
              <div className='max-w-md w-3/4 sm:w-1/2 text-white border-l-4 border-l-slate-800 flex flex-col'>
                <h3 className='text-2xl font-bold self-center'>Experience</h3>
                <div className='mt-5 ml-12 border-l-4 border-l-slate-100 bg-slate-700 p-5 relative'>
                  <p className='text-red-500 text-xl font-bold'>Stellantis North America</p> 
                  <h4 className='text-red-500 text-sm font-bold'>Product Engineer</h4>
                  <p className='text-red-500 text-sm'>January 2022-Currently</p>
                  <p className=''>Validation rules for units in the chassis team, idea generator for suspensions in Jeep Grand Cherokee and RAM vehicles.</p>
                  <div className='absolute h-0.5 w-12 bg-slate-100 top-1/2 -left-12'>
                    <div className='relative bottom-1 block w-2.5 h-2.5 rounded-e-full rounded-t-full rounded-r-full rounded-b-full rounded-l-full right-2.5 bg-slate-100'></div>
                  </div>
                </div>

                <div className='mt-5 ml-12 border-l-4 border-l-slate-100 bg-slate-700 p-5 relative'>
                  <p className='text-red-500 text-xl font-bold'>Yazaki North America</p> 
                  <h4 className='text-red-500 text-sm font-bold'>Product Design Engineer</h4>
                  <p className='text-red-500 text-sm'>July 2021-January 2022</p>
                  <p className=''>Drawing design and releases in products for the Ford Maverick vehicle. </p>
                  <div className='absolute h-0.5 w-12 bg-slate-100 top-1/2 -left-12'>
                    <div className='relative bottom-1 block w-2.5 h-2.5 rounded-e-full rounded-t-full rounded-r-full rounded-b-full rounded-l-full right-2.5 bg-slate-100'></div>
                  </div>
                </div>

                <div className='mt-5 ml-12 border-l-4 border-l-slate-100 bg-slate-700 p-5 relative'>
                  <p className='text-red-500 text-xl font-bold'>Navistar International</p> 
                  <h4 className='text-red-500 text-sm font-bold'>Engineer Intern</h4>
                  <p className='text-red-500 text-sm'>September 2019-March 2020</p>
                  <p className=''>Algormitms & code standards for units in each trim version of the trucks.</p>
                  <div className='absolute h-0.5 w-12 bg-slate-100 top-1/2 -left-12'>
                    <div className='relative bottom-1 block w-2.5 h-2.5 rounded-e-full rounded-t-full rounded-r-full rounded-b-full rounded-l-full right-2.5 bg-slate-100'></div>
                  </div>
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Education