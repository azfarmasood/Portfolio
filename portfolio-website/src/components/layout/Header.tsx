"use client"
import Wrapper from "@/components/shared/Wrapper"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/components/asserts/images/logo/full-stack-logo.png"
import Links from "@/components/shared/Links"
import { Navlinks } from "@/components/shared/Links"
import { motion } from "framer-motion"
const Header = () => {
    const animateHeader = {
        hidden: { opacity: 0, y: -50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1
            }
        }
    }
    const IsMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : true
    return(
        <motion.header className="sticky top-0 backdrop-blur-lg bg-primary bg-opacity-90 z-20 scroll-smooth" initial="hidden" animate="show" variants={IsMobile ? {} : animateHeader}>
        <Wrapper>
        <div className="flex justify-between items-center">
            <div className="w-32">
                <Link href={"/#"}><Image src={Logo} alt="Logo" className="w-32"/></Link>
            </div>
            
            <ul className="list-none flex gap-6 lg:text-lg mt-2 text-sm text-Primary">
                
                {
                    Navlinks.map((links, index) => (
                        <li className="hover:text-slate-200 duration-500 cursor-pointer" key={index}>
                            <Links href={links.path} title={links.title}/>
                        </li>
                    ))
                }
                
            </ul>
        </div>
        </Wrapper>
        </motion.header>
    )
}
export default Header