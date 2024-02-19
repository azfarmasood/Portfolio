"use client"
import Wrapper from "@/components/shared/Wrapper";
import Hero_Image from "@/components/asserts/images/Hero_Images/full-stack-web-developer-1024x1024-removebg-preview.png"
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
const Hero = () => {
    const animateHero = {
        hidden: {opacity: 0},
        show: {opacity:1,
                transition: {
                duration: 1,
            }
            }
    }
    const IsMobile = typeof window !== 'undefined' ? window.innerWidth <= 768: true;
    return(
        <motion.section id="home" initial="hidden" animate="show" variants={IsMobile ? {} : animateHero}>
            <Wrapper>
                <div className="flex flex-col md:flex-row lg:items-center mt-10" >
            <div className="flex-1">
                <div className="max-w-full" 
                >
                <h1 className="text-white bg-clip-text font-extrabold md:text-4xl sm:text-lg text-base bg-gradient-to-r from-slate-400 via-gray-600"><span className="whitespace-pre-line text-transparent sm:leading-10"></span>
        <TypeAnimation
        className="bg-clip-text bg-gradient-to-bl text-transparent whitespace-pre-line from-slate-400 via-gray-600"
            sequence={[
        "Hello I'm Azfar",
        1000,
        "I am a Full Stack Developer.",
        1000,
        "I Can Create a Design From UI/UX.",
        1000,
        "Creating A Web Application Using API.",
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
    </h1>
                <p className="md:text-lg max-w-screen-sm font-bold mt-6 text-white text-xs">I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.</p>

                <div className="md:mt-10 mt-0 space-x-6">
                    <button className="xs:text-lg text-sm md:px-6 md:py-3 px-3 py-2 w-full xs:w-fit rounded-full bg-slate-400 hover:bg-slate-200 duration-1000 text-black font-bold">Learn More</button>

                    <button className="sm:mt-0 xs:text-lg text-sm mt-4 w-full xs:w-fit md:px-6 md:py-3 px-3 py-2 font-bold bg-transparent text-white hover:bg-slate-800 duration-1000 rounded-full border-white border">Read More</button>
                </div>
                </div>
            </div>
            <div className="justify-center flex flex-1 lg:mt-0 mt-10">
                    <Image src={Hero_Image} alt="Hero-Image" className="bg-secondary rounded-full"/>
                </div>
                </div>
            </Wrapper>
        </motion.section>
    )
}
export default Hero