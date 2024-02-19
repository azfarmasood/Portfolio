import { FC , MouseEventHandler} from "react"
import { motion } from "framer-motion"
const Aanimation = {
  default: {width: 0},
  active: {width: "calc(100% - 0.20rem)"}
}
type Iprops = {
    active:boolean,
    selectedtab:MouseEventHandler
    children:string,
}
const TabSelection:FC<Iprops> = ({active,selectedtab,children}) => {
    const buttonClass = active ? "text-white":"text-Primary"
  return (
    <button onClick={selectedtab}>
        <p className={`font-semibold hover:text-white ${buttonClass}`}>
        {children}
        </p>
        <motion.div animate={active ? "active" : "default"} variants={Aanimation} className="h-1 bg-white rounded-full mt-1"></motion.div>
    </button>
  )
}

export default TabSelection


export const SkillsData = [
  {
    title: "Skills",
    id: "Skills",
    content: (
      <ol className="list-disc">
        <li className="mx-4 md:text-lg text-base"><span className="text-Primary">Nodejs</span></li>
        <li className="mx-4 md:text-lg text-base"><span className="text-Primary">TypeScript</span></li>
        <li className="mx-4 md:text-lg text-base"><span className="text-Primary">Next.js</span></li>
        <li className="mx-4 md:text-lg text-base"><span className="text-Primary">HTML</span></li>
        <li className="mx-4 md:text-lg text-base"><span className="text-Primary">CSS</span></li>
        <li className="mx-4 md:text-lg text-base"><span className="text-Primary">JavaScript</span></li>
        <li className="mx-4 md:text-lg text-base"><span className="text-Primary">BootStrap</span></li>
        <li className="mx-4 md:text-lg text-base"><span className="text-Primary">React</span></li>
      </ol>
    )
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ol className="list-disc">
        <li className="mx-4 md:text-lg text-base"><span className="text-Primary">Aptech</span></li>
        <li className="mx-4 md:text-lg text-base"><span className="text-Primary">PIAIC</span></li>
      </ol>
    )
  },
  {
    title: "Certificate",
    id: "Certificate",
    content: (
      <ol className="list-disc">
        <li className="mx-4 md:text-lg text-base"><span className="text-Primary">CPISM Certificate</span></li>
        <li className="mx-4 md:text-lg text-base"><span className="text-Primary">Web 3.0 Metaverse Specialization Certificate</span></li>
      </ol>
    )
  },
]