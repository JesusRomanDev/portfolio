import React from 'react'

const PreLoader = () => {
  return (
    <div className='loader'>
        <div className="flex flex-col sm:flex-row w-1/4 justify-center gap-2 items-center">
            <div className=''>
                <p className='w-full sliderUp text-white'>Hold on.. We're almost there</p>
            </div>
            <svg className='sm:w-1/5 sliderUp' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><linearGradient id="a11"><stop offset="0" stopColor="#FFFFFF" stopOpacity="0"></stop><stop offset="1" stopColor="#FFFFFF"></stop></linearGradient><circle fill="none" stroke="url(#a11)" strokeWidth="7" strokeLinecap="round" strokeDasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="70" transform-origin="center"><animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite"></animateTransform></circle></svg>
        </div>
    </div>
  )
}

export default PreLoader