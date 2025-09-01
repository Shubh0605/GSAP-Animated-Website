import React from 'react'
import ProjectCard from '../Components/Projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Project = () => {

  const projectsList = [{image1:'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'},
    {image1:'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg'},
    {image1:'https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'},
    {image1:'https://k72.ca/uploads/caseStudies/BEST/BEST_site_menu_Thumbnail-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg'},
    {image1:'https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg'},
    {image1:'https://k72.ca/uploads/caseStudies/OSM/thumbnail_OSM_1280-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg'},
    {image1:'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'},
    {image1:'https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg'}]
  
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(function(){
      gsap.to('.hero',{
        height:'100px',
        stagger:{
          amount:0.4
        },
        scrollTrigger:{
          trigger:'.lol',
          start:'top 100%',
          end:'top -150%',
          scrub:true
        }
      })
    })
  
    return (
    <div className='lg:p-2 p-1 mb[100vh]'>
      <div className=' pt-[40vh]'>
        <h2 className='font-[font2] text-black lg:text-[14.5vw] text-7xl uppercase'>Projets</h2>
      </div>
      <div className='-lg:-mt-20 lol'>
        {projectsList.map(function(elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[800px] flex lg:flex-row flex-col mb-2 lg:gap-2 gap-1 '>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
        })}  
      </div>
    </div>
  )
}

export default Project
