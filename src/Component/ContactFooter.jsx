import React, { useState } from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import { Reveal } from '../reveal'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

const ContactFooter = () => {
    const [submit, setSubmit] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        Message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const btnSubmit = (e) => {
        e.preventDefault();
        setSubmit(!submit);
    }
    
    const removeBtnSubmit = (e) => {
        e.preventDefault();
        setSubmit(!submit);
        
        setFormData({
            Name: "",
            Email: "",
            Message: ""
        });

        const goHome = () => {
            navigate('/');
            setTimeout(() => {
                window.scrollTo({top: 0, behavior: "smooth"});
            }, 100);
        };

        goHome()

        toast.info('Sent Successfully');
    }

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

    const messageAnimation = {
        hidden: {
            y: "-100vh", opacity: 0,
            transition: {duration: 0.3}
        },
        visible: {
            y: 1, opacity: 1,
            transition: {ease: "easeIn", type: "spring", stiffness: 60}
        }
    }

  return (
    <>
    <section id="Contact" className="section">
        <div className="grid Contact-grid">
            <div className="contact-grid1">
                <Reveal>
                <h3 className="sub-head contact-head">CONTACT US</h3>
                </Reveal>
                <Reveal>
                <div className="grid1-contact text-1 cnt">
                    <FaEnvelope className='contact-fa'/>
                    <a href="" className="contact-a">
                        <span className="contact-text">contactme@email.com</span>
                    </a>
                </div>
                </Reveal>
                <Reveal>
                <div className="grid1-contact text-2 cnt">
                    <FaWhatsapp className='contact-fa'/>
                    <a href="" className="contact-a">
                        <span className="contact-text">1234567890</span>
                    </a>
                </div>
                </Reveal>
                <div className="socials">
                    <Reveal>
                    <span className="socials-i">
                        <a href="" className="contact-a">
                            <FaFacebook/>
                        </a>
                    </span>
                    </Reveal>
                    <Reveal>
                    <span className="socials-i">
                        <a href="" className="contact-a">
                            <FaInstagram/>
                        </a>
                    </span>
                    </Reveal>
                    <Reveal>
                    <span className="socials-i">
                        <a href="" className="contact-a">
                            <FaLinkedin/>
                        </a>
                    </span>
                    </Reveal>
                </div>
            </div>
            <div className="contact-grid1 contact-form">
                <Reveal>
                <div className="form-title">
                    <p>Send us a message</p>
                </div>
                </Reveal>
                <form onSubmit={btnSubmit}>
                    <div>
                        <Reveal>
                        <div>
                            <label htmlFor="Name">
                                <input name='Name' type="text" id="Name" className="form-Name" value={formData.Name} onChange={handleChange}placeholder="Enter your Name" required />
                            </label>
                            <label htmlFor="Email">
                                <input type="email" name="Email" placeholder="Enter your Email" value={formData.Email} onChange={handleChange} className="form-Email" required />
                            </label>
                            <label htmlFor="Messaage">
                                <textarea type="text" name="Message" id=" Message" placeholder="Enter your Message" value={formData.Message} onChange={handleChange}
                                    className="form-Message" required ></textarea>
                            </label>
                        </div>
                        </Reveal>
                        <Reveal>
                        <motion.button type='submit' className="submit"
                            variants={btnAnimation}
                            whileHover="hover"
                            whileTap="tap"
                        >SEND</motion.button>
                        </Reveal>
                    </div>
                </form>
                <AnimatePresence>
                {submit && (
                    <div className="message-bg">
                        <motion.div className="message"
                        variants={messageAnimation}
                        initial= "hidden"
                        animate="visible"
                        exit="hidden"
                        >
                            <p className='message-p'>Your message has been successfully sent</p>
                            <motion.button className='back' onClick={removeBtnSubmit}
                                    variants={btnAnimation}
                                    whileHover="hover"
                                    whileTap="tap"
                                >Go back</motion.button>
                        </motion.div>
                    </div>
                )}
                </AnimatePresence>
            </div>
        </div>
    </section>

    <footer>
        <p><em>Dahvid</em> 2024</p>
    </footer>
    </>
  )
}

export default ContactFooter