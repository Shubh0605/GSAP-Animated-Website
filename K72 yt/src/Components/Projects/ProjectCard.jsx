import React from 'react'

const ProjectCard = ({ image1, image2 }) => {
  return (
   <>
   <div className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[50px] overflow-hidden h-full '>
           <img className='h-full w-full object-cover' src={image1} alt="" />
           <div className='opacity-0 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
            <h2 className='text-5xl font-[font2] border-2 pt-2 px-4 border-white text-white rounded-full'>VIOR LE PROJECT</h2>
           </div>
          </div>
          <div className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[50px] overflow-hidden h-full '>
           <img className='h-full w-full object-cover' src={image2} alt="" />
           <div className='opacity-0 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
            <h2 className='text-5xl font-[font2] border-2 pt-2 px-4 border-white text-white rounded-full'>VIOR LE PROJECT</h2>
           </div>
          </div>
   </>
          
        
   
  )
}

export default ProjectCard

