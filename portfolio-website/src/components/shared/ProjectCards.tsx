import { FC } from "react"
import Image from "next/image"
import PortfolioWebsite from "@/components/asserts/images/Projects Images/1.png"
import PhotoGraphyPortfolioWebsite from "@/components/asserts/images/Projects Images/2.png"
import FoodOrderingApplication from "@/components/asserts/images/Projects Images/4.png"
import E_CommerceApplication from "@/components/asserts/images/Projects Images/3.png"
import AuthunCation from "@/components/asserts/images/Projects Images/5.png"
import FireBaseTemplates from "@/components/asserts/images/Projects Images/6.png"
import { StaticImageData } from "next/image"
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
interface Iprops {
    imgUrl:StaticImageData,
    title:string,
    description:string,
    giturl:string,
    privewurl:string,
}

const ProjectCards:FC<Iprops> = ({imgUrl,title,description,giturl,privewurl}) => {
    return (
            <div>
                <div className="h-30 md:h-72 rounded-t-xl md:w-auto w-11/12 relative group" style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}>
                    <div className="text-white transform hover:scale-110 duration-1000">
                    <Image src={imgUrl} alt={title}/>
                    <div className="overlay gap-x-6 items-center justify-center absolute top-0 left-0 w-full h-full bg-primary bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                        <Link href={giturl} className="h-14 w-14 border-2 relative rounded-full border-Primary hover:border-white group/link">
                            <CodeBracketIcon className="h-10 w-10 absolute text-Primary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white cursor-pointer"/>
                        </Link>

                        <Link href={privewurl} className="h-14 w-14 border-2 relative rounded-full border-Primary hover:border-white group/link">
                            <EyeIcon className="h-10 w-10 absolute text-Primary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white cursor-pointer"/>
                        </Link>
                    </div>
                    </div>
                </div>

                <div className="text-white rounded-b-xl md:w-auto w-11/12 bg-secondary md:mt-4 lg:mt-0 mt-4 py-6 px-4">
                    <h5 className="text-xl font-semibold">{title}</h5>
                    <p className="text-Primary font-semibold">{description}</p>
                </div>
            </div>
    )
}
export default ProjectCards


export const projectData = [
    {
        id: 1,
        title: "Next.js Portfolio Website",
        description: "Project 1 description",
        image: PortfolioWebsite,
        tag: ["All","Web"],
        giturl: "/",
        privewurl: "/",
        
    },
    {
        id: 2,
        title: "Next.js PhotoGraphy Portfolio Website",
        description: "Project 2 description",
        image: PhotoGraphyPortfolioWebsite,
        tag: ["All","Web"],
        giturl: "/",
        privewurl: "/",
        
    },
    {
        id: 3,
        title: "Next.js E-commerce Application",
        description: "Project 3 description",
        image: E_CommerceApplication,
        tag: ["All","Web"],
        giturl: "/",
        privewurl: "/",
        
    },
    {
        id: 4,
        title: "Next.js Food Ordering Application",
        description: "Project 4 description",
        image: FoodOrderingApplication,
        tag: ["All","Mobile"],
        giturl: "/",
        privewurl: "/",
    },
    {
        id: 5,
        title: "Next.js Firebase Template",
        description: "Authentication and CRUD operations",
        image: AuthunCation,
        tag: ["All","Web"],
        giturl: "/",
        privewurl: "/",
    },
    {
        id: 6,
        title: "Next.js Full-stack Roadmap",
        description: "Project 5 description",
        image: FireBaseTemplates,
        tag: ["All","Web"],
        giturl: "/",
        privewurl: "/",
        
    },
]

type Iprops1 = {
    name:string,
    setTag:boolean,
    onClick: (name:string) => void
}

const ButtonDataSearch:FC<Iprops1> = ({name,setTag,onClick}) => {
    const buttonStyleactive = setTag ? "text-white bg-gradient-to-r text-transparent from-slate-400 via-gray-600": "text-Primary border-slate-600 hover:border-white hover:text-white duration-300"
    return(
        <div>
        <button className={`${buttonStyleactive} rounded-full border-2 px-6 py-2.5 text-xl cursor-pointer`} onClick={() => onClick(name)}>
            {name}
        </button>
        </div>
    )
}
export {ButtonDataSearch}