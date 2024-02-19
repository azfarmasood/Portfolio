import { Link  } from 'react-scroll'
import { FC } from "react"

type Iprops = {
    href:string
    title:string
}

const FooterLinks:FC<Iprops> = ({href,title}) => {
    return(
        <Link activeClass="text-white" to={href} spy={true} smooth={true} offset={-165} duration={700} href={href}>
            {title}
        </Link>
    )
}
export default FooterLinks

interface Links {
    title:string,
    path:string
}

export const NavLinks:Links[] = [
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