import { FC } from "react"

const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
    return(
        <div className="max-w-screen-2.5-xl font-sans mx-auto px-3 py-4 container scroll-smooth">
        {children}
        </div>
    )
}
export default Wrapper