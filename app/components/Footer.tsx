import About from "./About"

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center p-4 space-y-3">
            <p className="text-violet-500 text-lg font-semibold">LIGHT PRICE</p>
            <About />
            <p className="text-xs text-slate-300"> Copyright © {new Date().getFullYear()}</p>
            <div>
                <p className="text-xs text-slate-300"> Los datos son propiedad de Red Eléctrica de España</p>
                <p className="text-xs text-slate-300"> No me responsabilizo de cualquier error en los mismos</p>
            </div>
                
        </div>

    )
}
export default Footer