interface PriceBarsProps {
    data: any
}

const PriceBars = ({data}: PriceBarsProps) => {
  return (
    <div className="p-4">
        <h2 className="text-xl font-bold p-4">Precio por horas €/KWh</h2>
        <div>
            {data.map((d:any)=>{
                return (
                    <div className="flex items-center my-1">
                        <div className="w-8 text-slate-300">{d.time}</div>
                        <div key={d.time} className="text-sm rounded-md bg-violet-800 px-2" style={{width:`${d.price * 1500}px`}}> {d.price} </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
export default PriceBars