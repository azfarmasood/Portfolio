import { Link  } from 'react-scroll'
import { FC } from "react"

interface Iprops {
    href:string,
    title:string
}

const Links:FC<Iprops> = ({href,title}) => {
    return(
        <Link activeClass="text-white" to={href}  offset={title === "Home" ? -130 : (title === "Projects" ? -130 : -180)} duration={700}>
            {title}
        </Link>
    )
}
export default Links

type NavLinks = {
    title:string,
    path:string,
}
export const Navlinks:NavLinks[] = [
    {
        title: "Home",
        path: "home",
    
    },
    {
        title: "About Us",
        path: "about",
     
    },
    {
        title: "Projects",
        path: "projects",
        
    },
    {
        title: "Contact Us",
        path: "contact",
        
    }
]