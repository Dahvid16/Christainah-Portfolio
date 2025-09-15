import React, { useEffect, useRef } from 'react'
import image from '../assets/Images/Pic_8.png'
import {motion, useAnimation, useInView } from 'framer-motion'

const HomeSection = () => {
    const ref = useRef(null)
    const inView = useInView(ref, {once: true});

    const fireIntroAni = useAnimation();
    const firePicAni = useAnimation();

    useEffect(() => {
      if (inView) {
        fireIntroAni.start("visible")
        firePicAni.start("visible")
      }
    }, [inView]);

  const introVariant = {
    hidden: {
      x: "-100vh", opacity: 0
    },
    visible: {
      x: 1, opacity: 1,
      transition: {delay: 0.5, duration: 0.5, type: "spring", stiffness: 100}
    }
  }

  const firstText = {
    hidden: {
      opacity: 0,
      y: -75
    },
    visible: {
      opacity: 1,
      y: 1, scale: [0.5, 1],
      transition: {delay: 0, type: "spring", stiffness: 110}
    }
  }

  const secondText = {
    hidden: {
      opacity: 0,
      y: 75
    },
    visible: {
      opacity: 1,
      y: 1, scale: [0.5, 1],
      transition: {delay: 1.5, type: "spring", stiffness: 110}
    }
  }

  const introPicVariant = {
    hidden: {
      y: "-100vh", opacity: 0
    },
    visible: {
      y: 1, opacity: 1,
      transition: {delay: 0.5, duration: 0.7}
    }
  }

  return (
    <>
    <section ref={ref} id="Home" className="intro section"
    >
      <div className="grid home-grid">
        <motion.div className="intro-text">
          <motion.p className='main-sub-txt'
          variants={firstText}
          initial= "hidden"
          animate= {fireIntroAni}
          >Welcome!</motion.p>
          <motion.p className='main-intro-txt'
            variants={introVariant}
            initial= "hidden"
            animate= {fireIntroAni}
          >Hi, I am <span>Christianah</span></motion.p>
          <motion.p className='main-sub-txt'
          variants={secondText}
          initial= "hidden"
          animate= {fireIntroAni}
          >Certified Graphic Designer</motion.p>
        </motion.div>
        <motion.div className="intro-pic"
          variants={introPicVariant}
          initial= "hidden"
          animate= { firePicAni }
        >
        </motion.div>
      </div>
    </section>
    </>
  )
}

export default HomeSection