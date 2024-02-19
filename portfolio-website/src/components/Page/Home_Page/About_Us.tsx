"use client"
import Image from "next/image"
import AboutImage from "@/components/asserts/images/About_us_Image/about-us.jpg"
import Wrapper from "@/components/shared/Wrapper"
import { useTransition, useState } from "react"
import TabSelection from "@/components/shared/TabSelection"
import { SkillsData } from "@/components/shared/TabSelection"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
const About_Us = () => {
    const [tab, selectedTab] = useState("Skills");

    const [Content,Transition] = useTransition();

    const [ref, inView] = useInView({
        triggerOnce: true, 
        rootMargin: typeof window !== 'undefined' ? (window.innerWidth > 768 ? "0px 0px -390px 0px" : "0px"): "0px",
    });

    const Switchtab = (id:string) => {
        Transition(() =>{
            selectedTab(id);
        })
    }

    const animateImage = {
        left: {opacity: 0 , x: -100,},
        show: {opacity: 1 , x: 0}
    }

    const animateContent = {
        right: {opacity: 0 , x: 100},
        show: {opacity: 1 , x: 0}
    }
    
    const FadeUP = {
        up: {opacity: 0 , y: 100},
        show: {opacity: 1 , y: 0}
    }
    const IsMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : true;

    return(
        <Wrapper>
        <section className="mt-28" id="about">
            <main className="text-white">
            <div className="flex justify-center">
                <motion.div ref={ref} initial="up" animate={inView ? "show" : "up"} variants={IsMobile ? {} : FadeUP} transition={{duration:1}}>
                    <h1 className="font-extrabold justify-center md:text-6xl text-3xl underline">Web Developer</h1>
                </motion.div>
            </div>

            <div className="flex flex-col-reverse items-center md:flex-row mt-24 gap-6">
                <motion.div className="basis-2/6" ref={ref} initial="left" animate={inView ? "show" : "left"} variants={IsMobile ? {} : animateImage} transition={{duration: 1}}>
                    <Image src={AboutImage} alt="about-image" className="md:rounded-3xl rounded-full"/>
                </motion.div>
                <div  className="basis-2/3">
                    <motion.div className="max-w-screen-sm" ref={ref} initial="right" animate={inView ? "show" : "right"} variants={IsMobile ? {} : animateContent} transition={{duration: 1}}>
                    <h1 className="md:text-4xl text-2xl font-bold underline">Aabout Me</h1>
                        <p className="mt-4 md:text-lg text-sm font-bold">I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.</p>

                        <div className="flex flex-row mt-6 gap-4">
                        <TabSelection selectedtab={() => Switchtab("Skills")} active={tab === "Skills"}>
                            Skills
                        </TabSelection>
                        <TabSelection selectedtab={() => Switchtab("Education")} active={tab === "Education"}>
                            Education
                        </TabSelection>
                        <TabSelection selectedtab={() => Switchtab("Certificate")} active={tab === "Certificate"}>
                            Certificate
                        </TabSelection>
                    </div>
                    <div className="mt-4">
                        {SkillsData.find((Data)=> Data.id === tab)?.content}
                    </div>
                    </motion.div>
                </div>
            </div>
                
            </main>
        </section>
        </Wrapper>
    )
}
export default About_Us