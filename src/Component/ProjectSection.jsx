import React from 'react'
import {Reveal} from '../reveal'
import Carousel from './Carousel'


    
const ProjectSection = () => {
    const OPTIONS = {}
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    
    return (
    <>
    <section id="Project" className="section">
        <Reveal>
        <h3 className="sub-head project-sub-head">MY WORK</h3>
        </Reveal>
        <Reveal>
            <Carousel slides={SLIDES} options={OPTIONS}/>
        </Reveal>
    </section>
    </>
  )
}

export default ProjectSection