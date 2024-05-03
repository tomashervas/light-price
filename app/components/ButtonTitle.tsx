"use client"

interface ButtonTitleProps {
    active: boolean
}

const ButtonTitle = ({active}: ButtonTitleProps) => {
  return (
    <div className="flex space-x-2">
        <button className="bg-violet-800 px-2 rounded-md hover:bg-violet-700"> Hoy </button>
        <button type="button" disabled={!active} className={`${active ? 'bg-violet-800 hover:bg-violet-500' : 'bg-slate-800 text-slate-500'} px-2 rounded-md `}> Mañana </button>
    </div>
  )
}
export default ButtonTitle