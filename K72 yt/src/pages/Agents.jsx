import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import React, { useRef } from 'react'


const Agents = () => {

  
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArray = ['https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg'
    ] 

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:"top 25.5%",
        end:"top -70%",
        pin:true,
        onUpdate:(elem)=>{
          const progress = elem.progress
          const imageIndex = Math.floor(progress * (imageArray.length - 1))
          imageRef.current.src = imageArray[imageIndex]

        }
      }
    })

  })
  
  return (
    <div>
      <div className='section1'>
      <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h:[25vw] rounded-2xl lg:w-[15vw] w-[20vw] top-40   lg:left-[30vw] left-[20vw]'>
        <img ref={imageRef}className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
      </div>
      <div className='relative font-[font2]'>
      <div className='lg:mt-[55vh] mt-[38vh]'>
        <h1 className='text-[20vw] text-center uppercase leading-[17vw] text-black'>Soixan7e<br />
          Douze</h1>
      </div>
      <div className='lg:pl-[40%] lg:mt-20 mt-13 p-3'>
        <p className='lg:text-3xl text-xl leading-tight lg:w-50%  text-black'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
    </div>
    </div>
    <div className='section2 h-screen'>
      
    </div>
    </div>
  )
}

export default Agents