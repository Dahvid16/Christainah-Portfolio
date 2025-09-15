import React, { useEffect, useState } from 'react'
import { FaBars, FaCalendarTimes, FaClosedCaptioning, FaTimes } from 'react-icons/fa'
import { AnimatePresence, delay, easeInOut, motion, scale, useInView } from 'framer-motion';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => {
        setIsOpen(!isOpen);
    }

    const hTxtAmination = {
        hidden: {
            opacity: 0, scale: 0.9
        },
        visible: {
            opacity: 1, scale: [1.2,1,1.1,1,1.1,1,1.1,1],
            transition: {
                delay: 0.2, duration: 1.3
            }
        }
    }

    const [activeSection, setActiveSection] = useState("Home");

    useEffect(() => {
        const observer = new IntersectionObserver (
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {threshold: 0.4} // Section is active if 40% shows
        );

        const sections = [
            document.getElementById("Home"),
            document.getElementById("About"),
            document.getElementById("Services"),
            document.getElementById("Project"),
            document.getElementById("Contact")
        ];

        sections.forEach((section) => {
            if (section) observer.observe(section)
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

  return (
    <>
    <header className="header" id="header">
        <nav className="nav-bar container">
            <motion.span className="Main-header"
             variants={hTxtAmination}
             initial= "hidden"
             animate="visible"
             drag
             dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}
             dragElastic={0.6}
            >Christianah</motion.span>
            <div className="nav-bar-link" id="nav-menu">
                <motion.ul className="nav-bar-ul"
                    initial={{
                        opacity: 0, scale: 0, x: "100vw"
                    }}
                    animate={{
                        opacity: 1, scale: 1, x: 1
                    }}
                    transition={{
                        delay: 0.5, duration: 0.8
                    }}
                >
                    <li><a href="#Home" className={`${activeSection === "Home" ? "li-a nav__link active-link" : "li-a nav__link"}`}>Home</a></li>
                    <li><a href="#About" className={`${activeSection === "About" ? "li-a nav__link active-link" : "li-a nav__link"}`}>About</a></li>
                    <li><a href="#Services" className={`${activeSection === "Services" ? "li-a nav__link active-link" : "li-a nav__link"}`}>Services</a></li>
                    <li><a href="#Project" className={`${activeSection === "Project" ? "li-a nav__link active-link" : "li-a nav__link"}`}>Portfolio</a></li>
                    <li><a href="#Contact" className={`${activeSection === "Contact" ? "li-a nav__link active-link" : "li-a nav__link"}`}>Contact</a></li>
                </motion.ul>

            </div>
            {!isOpen && (
                <motion.div className="nav-menubar" id="nav-toggle" onClick={open}
                initial={{
                        opacity: 0, scale: 0, x: "100vw"
                    }}
                    animate={{
                        opacity: 1, scale: 1, x: 1
                    }}
                    transition={{
                        delay: 0, duration: 0.5, type: "spring", stiffness: "50"
                    }}
                >
                    <FaBars />
                </motion.div>
            )}
            <AnimatePresence>
                {isOpen && (
                    <>
                    <motion.div className="nav-bar-link show-menu" id="nav-menu"
                        initial= {{opacity: 0, y: "-100vh"}}
                        animate= {{ opacity: 1, y: 0}}
                        exit={{ opacity: 0, x: "-100vw"}}
                        transition= {{duration: 0.5, ease: easeInOut}}
                    >
                        <div className="nav-closebar" id="nav-close" onClick={open}>
                            <FaTimes />
                        </div>
                        <ul className="nav-bar-ul">
                            <li>
                                <a href="#Home" className={`${activeSection === "Home" ? "li-a nav__link active-link" : "li-a nav__link"}`} onClick={open}>Home</a>
                            </li>
                            <li>
                                <a href="#About" className={`${activeSection === "About" ? "li-a nav__link active-link" : "li-a nav__link"}`} onClick={open}>About</a>
                            </li>
                            <li>
                                <a href="#Services" className={`${activeSection === "Services" ? "li-a nav__link active-link" : "li-a nav__link"}`} onClick={open}>Services</a>
                            </li>
                            <li>
                                <a href="#Project" className={`${activeSection === "Project" ? "li-a nav__link active-link" : "li-a nav__link"}`} onClick={open}>Portfolio</a>
                            </li>
                            <li>
                                <a href="#Contact" className={`${activeSection === "Contact" ? "li-a nav__link active-link" : "li-a nav__link"}`} onClick={open}>Contact</a>
                            </li>
                        </ul>

                    </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    </header>
    </>
  )
}

export default NavBar