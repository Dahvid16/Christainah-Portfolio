import React from 'react'
import LogoIcon from '../assets/Images/Logo_icon.png'
import FlyerIcon from '../assets/Images/Flyer_icon.png'
import CertificateIcon from '../assets/Images/Certificate_icon.png'
import { Reveal } from '../reveal'

const Service = () => {
  return (
    <>
    <section id="Services" className="section">
        <Reveal>
        <h3 className="sub-head">MY SERVICES</h3>
        </Reveal>
        <div className="grid Service-grid">
            <Reveal>
            <div className="service-div">
                <span className="icon icon-1"><img src={ LogoIcon } alt="logo"/></span>
                <Reveal>
                <h4 className='service-div-h4'>Logo Design</h4>
                </Reveal>
                <Reveal>
                <p className="service-div-p">
                    Logo design is the creation of a unique visual symbol that represents a brand, combining imagery
                    and
                    text to communicate its identity and values effectively to future customers.
                </p>
                </Reveal>
            </div>
            </Reveal>
            <Reveal>
            <div className="service-div">
                <span className="icon icon-1"><img src={FlyerIcon} alt="flyer" /></span>
                <Reveal>
                <h4 className="service-div-h4">Flier Design</h4>
                </Reveal>
                <Reveal>
                <p className="service-div-p">
                    Flyer Design is creating a visually engaging, single-page advertisement that effectively
                    promootes a
                    product, event, or service.
                </p>
                </Reveal>
            </div>
            </Reveal>
            <Reveal>
            <div className="service-div">
                <span className="icon icon-1"><img src={CertificateIcon} alt="Certificate"/></span>
                <Reveal>
                <h4 className="service-div-h4">Certificate Design</h4>
                </Reveal>
                <Reveal>
                <p className="service-div-p">
                    Certificate Design is creating a professional document that visually recognizes and celebrates
                    an
                    achievement or award.
                </p>
                </Reveal>
            </div>
            </Reveal>
        </div>
    </section>
    </>
  )
}

export default Service