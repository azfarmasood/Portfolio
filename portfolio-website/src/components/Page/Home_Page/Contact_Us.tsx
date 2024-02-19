"use client"
import Wrapper from "@/components/shared/Wrapper"
import Github_Icon from "@/components/asserts/icons/github-icon.svg"
import Linkdin_Icon from "@/components/asserts/icons/linkedin-icon.svg"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Contact_Us = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: typeof window !== 'undefined' ? (window.innerWidth > 768 ? "0px 0px -390px 0px" : "0px"): "0px",
    });

    const fadeInAnimationUp = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    };

    const fadeInAnimationLeft = {
        left: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0 },
    }

    const fadeInAnimationRight = {
        right: { opacity: 0, x: 100 },
        found: { opacity: 1, x: 0 },
    }
    const IsMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : true;

    
    return(
        <Wrapper>
            <section className="mt-28" id="contact">
                <main className="text-white">
                <div className="flex justify-center">
                <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={IsMobile ? {} : fadeInAnimationUp}
                transition={{ duration: 1 }}
            >
                    <h1 className="font-extrabold justify-center md:text-6xl text-3xl underline">Contact Us</h1>
            </motion.div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-28 md:relative">
                <motion.div className="md:z-10" ref={ref} initial="right"
                animate={inView ? "found" : "right"}
                variants={ IsMobile ? {} : fadeInAnimationRight}
                transition={{ duration: 1 }}>
 
                <div className="md:bg-gradient-to-r text-transparent md:from-slate-400 md:via-gray-600 md:rounded-full md:h-80 md:w-80 md:-z-10 md:blur-lg md:absolute md:top-2/4 md:-left-10 md:mt-0 md:transform md:-translate-x-1/2 md:-translate-1/2 md:-translate-y-1/2"></div><h5 className="md:text-xl text-lg font-bold underline">Connect With Me</h5><p className="text-Primary font-bold md:text-lg text-sm mt-2 max-w-md">Im currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, Ill try my best to get back to you!</p><div className="Social-icons flex flex-row gap-3 mt-3">
                <Link href={"https://github.com/panaverse"}>
                <Image src={Github_Icon} alt="Githubicon" className="md:w-full w-8 transform hover:scale-105 duration-500" />
                 </Link>
                 <Link href={"https://pk.linkedin.com/company/panaverse"}>
                <Image src={Linkdin_Icon} alt="Linkdinicon" className="md:w-full w-8 transform hover:scale-105 duration-500" />
                </Link>
                 </div>
  
                </motion.div>
                <motion.div ref={ref} initial="left"
                animate={inView ? "show" : "left"}
                variants={ IsMobile ? {} : fadeInAnimationLeft}
                transition={{ duration: 1 }}>
                    <form>
                        <div className="flex md:flex-row flex-col gap-4 mt-1">
                            <div className="flex-1">
                            <label htmlFor="email" className="px-2 md:text-lg text-base">Your Email</label>
                            <input 
                            type="email" 
                            id="email" 
                            required 
                            placeholder="YourEmail@example.com"
                            className="bg-itriy border border-trio placeholder-placeholder text-gray-100 text-base rounded-lg block w-full p-2.5 mt-2"
                            />
                        </div>
                            <div className="flex-1">
                            <label htmlFor="subject" className="px-2 md:text-lg text-base">Your Subject</label>
                            <input 
                            type="text" 
                            id="subject" 
                            required 
                            placeholder="Your Subject"
                            className="bg-itriy border border-trio placeholder-placeholder text-gray-100 text-base rounded-lg block w-full p-2.5 mt-2"
                            />
                        </div>
                        </div>
                        <div className="w-full flex flex-col mt-4">
                        <label htmlFor="message" className="px-2 md:text-lg text-base">Your Message</label>
                            <textarea name="message" id="message" placeholder="What Can I help You ?" required cols={30} rows={10} className="bg-itriy border border-trio placeholder-placeholder text-gray-100 text-base rounded-lg block w-full p-2.5 mt-2">
                            </textarea>
                        </div>
                        <div className="mt-6 group md:w-53">
                        <button type="submit" className="bg-Primary group-hover:bg-gradient-to-r group-hover:from-slate-400 text-black  duration-1000 group-hover:via-gray-600 group-hover:text-white font-bold px-4 py-2.5 rounded-xl md:text-lg text-sm  md:w-auto w-full">Submit Your Message</button>
                        </div>
                    </form>
                </motion.div>
            </div>
                </main>
            </section>
        </Wrapper>
    )
}
export default Contact_Us