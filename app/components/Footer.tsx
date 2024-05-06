import About from "./About"

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center p-4 space-y-3">
            <p className="text-violet-500">Light price</p>
            <About />
            <p className="text-xs text-slate-300"> Copyright © {new Date().getFullYear()}</p>
                
        </div>

    )
}
export default Footer