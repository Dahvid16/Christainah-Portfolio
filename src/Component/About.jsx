import React from 'react'
import { Reveal } from '../reveal'
import { motion } from 'framer-motion'

const About = () => {
  const btnAnimation = {
    hover: {
      scale: 1.05,
      boxShadow: "0 4px 6px #8a8787",
      transition: {duration: 0.3}
    },
    tap: {
      scale: 0.95,
      rotate: "-2.5deg",
      transition: {duration: 0.3}
    }
  }

  return (
    <>
    <section id="About" className="section">
        <div className="grid About-grid">
            <div className="about-image-container">
            </div>
            <Reveal>
            <div className="about-text-container">
                <Reveal>
                <h3 className="sub-head about-sub-head">ABOUT Me</h3>
                </Reveal>
                <span className="abt-text-container"></span>
                <Reveal>
                <p className="about-p">I am Christanah, a passionate and creative graphic designer with over 3 years experience in visual storytelling and brand identity creation.</p>
                </Reveal>
                <Reveal>
                <p className="about-p">At Christianah's Graphic design, we create visual aesthetic designs that brings you closer to your targeted user.</p>
                </Reveal>
                <Reveal>
                <p className="about-p">We specialize in crafting visually compelling designs that resonate with target audiences and elevate brand presence.</p>
                </Reveal>
                <Reveal>
                <p className="about-p">We believe that great design is not just about aesthetics but also about functionality and purpose.
                </p>
                </Reveal>
                <Reveal>
                <p className="about-p">Our approach is collaborative, and we are committed to delivering designs that not only look great but also serve the strategic goals of my clients.
                </p>
                </Reveal>
                <Reveal>
                  <a href="#Contact" className="about-btn-a">
                    <motion.button className="about-button"
                      variants={btnAnimation}
                      whileHover="hover"
                      whileTap="tap"
                    >Book us</motion.button>
                  </a>
                </Reveal>
            </div>
            </Reveal>
        </div>
    </section>
    </>
  )
}

export default About