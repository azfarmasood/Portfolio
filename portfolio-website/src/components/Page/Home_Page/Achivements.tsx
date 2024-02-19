"use client";
import Wrapper from "@/components/shared/Wrapper";
import { AchivementsData } from "@/components/shared/AchivementData"
import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"

const Achivements = () => {
  const [animateStarted, animateOnce] = useState(false);
  const [ref,InView] = useInView({
    triggerOnce: true,
    rootMargin: typeof window !== 'undefined' ? (window.innerWidth > 768 ? "0px 0px -300px 0px" : "0px"): "0px",
  })

  const animateOnceaTime = (onetimeAnimate:boolean) => {
    if(onetimeAnimate && !animateStarted){
      setTimeout(()=>{
        animateOnce(true);
      }, 1000)
    }
   
  };

  const animateAchivement = {
    hidden: { opacity: 0, y: -50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            }
        }
  }
  const IsMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : true;
  return (
    <motion.section ref={ref} className="mt-20" initial="hidden" animate={InView ? "show" : "hidden"} variants={IsMobile ? {} : animateAchivement}>
      <div className="py-8 xl:gap-16 md:py-2 xl:px-16 ">
        <Wrapper>
          <div className="text-white flex md:justify-start justify-center items-center">
            <h1 className="md:text-6xl text-3xl font-extrabold underline">Achivements</h1>
          </div>
          <div className="py-4 flex md:flex-row flex-col items-center justify-between md:mt-8">
            {AchivementsData.map((achivementdata, number) => {
              return (
                <div
                  key={number}
                  className="flex flex-col items-center justify-center md:py-0 py-4"
                >
                  <h4 className="text-white font-bold md:text-3xl text-xl flex flex-row">
                  <VisibilitySensor onChange={animateOnceaTime} delayedCall>
                      <div>
                      {achivementdata.prefix}
                        <CountUp
                          end={animateStarted ? Number(achivementdata.value) : 0}
                          decimal=""
                          duration={3}
                        />
                        {achivementdata.postfix}
                      </div>
                    </VisibilitySensor>
                  </h4>
                  <p className="text-Primary md:text-base text-sm mt-1">
                    {achivementdata.matric}
                  </p>
                </div>
              );
            })}
          </div>
        </Wrapper>
      </div>
    </motion.section>
  );
};

export default Achivements;