"use client"
import Wrapper from "@/components/shared/Wrapper"
import ProjectCards from "@/components/shared/ProjectCards"
import { projectData } from "@/components/shared/ProjectCards"
import { ButtonDataSearch } from "@/components/shared/ProjectCards"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [tag,IssetTag] = useState("All")

  const [ref,InView] = useInView({
    triggerOnce: true,
    rootMargin: typeof window !== 'undefined' ? (window.innerWidth > 768 ? "0px 0px 140px 0px" : "0px"): "0px",
})
  const handleTagChange = (newTag:string) => {
      IssetTag(newTag)
  };

  const TagFilters = projectData.filter((Data)=>
    Data.tag.includes(tag)
  )
  const CardAnimation = {
    show: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const animateSection = {
    hidden: { opacity: 0, y: -50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            }
        }
  }

  const isMobile = typeof window !== 'undefined' ?  window.innerWidth <= 768 : true;


  return (
    <Wrapper>
    <section className="mt-28" id="projects">
      <main className="text-white" >
        <motion.div className="flex justify-center text-center" ref={ref} initial="hidden" animate={InView ? "show" : "hidden"} variants={isMobile ? {} : animateSection} transition={{duration:1}}>
            <h1 className="font-extrabold md:text-6xl text-3xl underline">Projects</h1>
        </motion.div>

        <motion.div className="flex flex-row items-center justify-center gap-4 mt-16" ref={ref} initial="hidden" animate={InView ? "show" : "hidden"} variants={isMobile ? {} : animateSection}>
        <ButtonDataSearch 
        onClick={handleTagChange} 
        setTag={tag === "All"} 
        name="All" />

        <ButtonDataSearch 
        onClick={handleTagChange} 
        setTag={tag === "Mobile"} 
        name="Mobile"/>

        <ButtonDataSearch 
        onClick={handleTagChange} 
        setTag={tag === "Web"} 
        name="Web"/>
        </motion.div>

      <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center gap-8 md:gap-12 mt-16">
          {
            TagFilters.map((Data,animate)=>(
              <motion.div
                ref={ref}
                key={Data.id}
                variants={isMobile ? {} : CardAnimation}
                initial="hidden"
                animate={InView? 'visible' : 'show'}
                transition={{duration: 1, delay:animate * 0.6}}
              >
              <ProjectCards 
              title={Data.title} 
              description={Data.description} 
              imgUrl={Data.image}
              giturl={Data.giturl}
              privewurl={Data.privewurl}
              />
            </motion.div>
            ))
          }
      </div>
      </main>
    </section>
    </Wrapper>

  )
}

export default Projects
