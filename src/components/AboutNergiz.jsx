import React, { useEffect, useRef, useState } from 'react'
import AnimatedText from './AnimatedText'
import { AnimatedTiles } from './AnimatedTiles'

const AboutNergiz = () => {
  const [activeText, setActiveText] = useState(1)
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)
  const text3Ref = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      if (text1Ref.current && text2Ref.current && text3Ref.current) {
        const text1Top = text1Ref.current.offsetTop
        const text2Top = text2Ref.current.offsetTop
        const text3Top = text3Ref.current.offsetTop
        
        const scrollPosition = scrollY + windowHeight / 2
        
        if (scrollPosition >= text3Top) {
          setActiveText(3)
        } else if (scrollPosition >= text2Top) {
          setActiveText(2)
        } else if (scrollPosition >= text1Top) {
          setActiveText(1)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Define image URLs for each text section
  const getImageUrl = () => {
    switch(activeText) {
      case 1: return "/images/aboutNergiz.JPG"
      case 2: return "/images/about2.PNG"
      case 3: return "/images/servicebg.PNG"
      default: return "/images/aboutNergiz.JPG"
    }
  }

  // Define translateY values for each text section
  const getTranslateY = () => {
    switch(activeText) {
      case 1: return "0%"
      case 2: return "30%"
      case 3: return "55%"
      default: return "0%"
    }
  }

  return (
        <section className="bg-[#121212] min-h-screen pb-20">
            <div className="h-14 w-full bg-gradient-to-t from-[#121212] via-[#0e0e0e] to-transparent -translate-y-8"></div>
       <div className="max-w-7xl m-auto  px-4 sm:px-6 lg:px-8">
         
          
          <div className="flex flex-col lg:flex-row justify-center items-center gap-32">
            <div className="space-y-32">
                <AnimatedText
              text="Who We Are"
              className="text-4xl sm:text-5xl font-light text-gray-100 mb-12 lg:mb-16"
            />
              <div ref={text1Ref} className={`transition-all duration-700 ${activeText === 1 ? 'opacity-100 scale-100' : 'opacity-30 scale-95'}`}>
                <p className="text1 text-lg text-gray-400 mb-6 max-w-2xl leading-relaxed font-light">
                  At <span className='font-bold'>Nergiz Khalid</span> , we provide complete interior design services with full attention
                  to every detail. From concept to completion, we cover all types of design projects –
                  whether residential, commercial, or custom spaces.
                </p>
                <div className="lg:hidden mt-8">
                  <AnimatedTiles 
                    rows={8}
                    cols={6}
                    tileSize={60}
                    imageUrl="/images/aboutNergiz.JPG"
                    backgroundColor="transparent"
                  />
                </div>
              </div>
              
              <div ref={text2Ref} className={`transition-all duration-700 ${activeText === 2 ? 'opacity-100 scale-100' : 'opacity-30 scale-95'}`}>
                <p className="text2 text-lg text-gray-400 mb-6 max-w-2xl leading-relaxed font-light">
                  Our team ensures that every stage, from planning and material selection to execution
                  and finishing, is carried out with creativity, precision, and care.
                </p>
                <div className="lg:hidden mt-8">
                  <AnimatedTiles 
                    rows={8}
                    cols={6}
                    tileSize={60}
                    imageUrl="/images/about2.PNG"
                    backgroundColor="transparent"
                  />
                </div>
              </div>
              
              <div ref={text3Ref} className={`transition-all duration-700 ${activeText === 3 ? 'opacity-100 scale-100' : 'opacity-30 scale-95'}`}>
                <p className="text3 text-lg text-gray-400 max-w-2xl leading-relaxed font-light">
                  We believe that great design is not only about aesthetics, but also about functionality
                  and harmony. With a passion for innovation and detail, we bring your vision to life –
                  beautifully and completely.
                </p>
                <div className="lg:hidden mt-8">
                  <AnimatedTiles 
                    rows={8}
                    cols={6}
                    tileSize={60}
                    imageUrl="/images/servicebg.PNG"
                    backgroundColor="transparent"
                  />
                </div>
              </div>
            </div>

            
              <div className="transition-all duration-700 hidden lg:block">
                <AnimatedTiles 
                  rows={8}
                  cols={6}
                  tileSize={65}
                  imageUrl={getImageUrl()}
                  backgroundColor="transparent"
                  translateY={getTranslateY()}
                />
              </div>
            
          </div>
        </div>
      </section>
  )
}

export default AboutNergiz